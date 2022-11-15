import styles from './Item.module.scss'
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { UserContext } from '../../context/UserContext'

export default function Item({ listId, id, item }) {
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
	const [value, loading, error] = useDocumentData(itemRef)

	async function toggleComplete() {
		setDoc(
			itemRef,
			{
				complete: !value.complete
			},
			{ merge: true }
		)
	}

	async function deleteItem() {
		await deleteDoc(
			doc(getFirestore(), 'users', user.uid, 'lists', listId, 'items', id)
		)
	}

	return (
		<div>
			{value && (
				<button onClick={() => toggleComplete()}>
					{value.complete ? 'Y' : 'N'}
				</button>
			)}
			{item.itemName}
			<button onClick={() => deleteItem()}>X</button>
		</div>
	)
}
