import styles from './List.module.scss'
import { doc, deleteDoc, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export default function List({ id, list }) {
	const { user } = useContext(UserContext)

	async function deleteList() {
		await deleteDoc(doc(getFirestore(), 'users', user.uid, 'lists', id))
	}

	return (
		<div className={styles.list}>
			{list.listName}
			<button onClick={() => deleteList()}>X</button>
		</div>
	)
}
