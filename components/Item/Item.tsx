import styles from './Item.module.scss'
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { UserContext } from '../../context/UserContext'
import Checkmark from '../Checkmark'
import DeleteButton from '../DeleteButton'

export default function Item({ listId, id, item }): JSX.Element {
	const { user } = useContext(UserContext)
	const itemRef = doc(
		getFirestore(),
		'users',
		user.uid,
		'lists',
		listId,
		'items',
		id
	)
	const [value] = useDocumentData(itemRef)

	async function toggleComplete(): Promise<void> {
		setDoc(
			itemRef,
			{
				complete: !value.complete
			},
			{ merge: true }
		)
	}

	async function deleteItem(): Promise<void> {
		await deleteDoc(
			doc(getFirestore(), 'users', user.uid, 'lists', listId, 'items', id)
		)
	}

	return (
		<div className={styles.item}>
			<div className={styles.itemName}>
				{value && <Checkmark checked={item.complete} action={toggleComplete} />}
				<span>{item.itemName}</span>
			</div>
			<DeleteButton action={deleteItem} />
		</div>
	)
}
