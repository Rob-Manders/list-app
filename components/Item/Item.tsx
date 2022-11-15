import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import styles from './Item.module.scss'

export default function Item({ listId, id, item }) {
	const { user } = useContext(UserContext)

	async function deleteItem() {
		await deleteDoc(
			doc(getFirestore(), 'users', user.uid, 'lists', listId, 'items', id)
		)
	}

	return (
		<div>
			{item.itemName}
			<button onClick={() => deleteItem()}>X</button>
		</div>
	)
}
