import styles from './List.module.scss'
import Link from 'next/link'
import { doc, deleteDoc, getFirestore, collection } from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function List({ id, list }) {
	const { user } = useContext(UserContext)
	const [complete, setComplete] = useState(false)
	const [values] = useCollectionData(
		collection(getFirestore(), 'users', user.uid, 'lists', id, 'items')
	)

	useEffect(() => {
		let incompleteItems

		if (values) {
			incompleteItems = values.reduce((incomplete, item) => {
				if (item.complete) return incomplete++
			}, 0)
		}

		if (incompleteItems === 0 && values.length > 0) {
			setComplete(true)
		}
	}, [values])

	async function deleteList() {
		await deleteDoc(doc(getFirestore(), 'users', user.uid, 'lists', id))
	}

	return (
		<div className={styles.list}>
			{complete ? 'Y ' : 'N '}
			<Link href={`/list/${id}`}>{list.listName}</Link>
			<button onClick={() => deleteList()}>X</button>
		</div>
	)
}
