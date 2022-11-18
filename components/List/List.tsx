import styles from './List.module.scss'
import Link from 'next/link'
import {
	doc,
	deleteDoc,
	getFirestore,
	collection,
	DocumentData
} from 'firebase/firestore'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Checkmark from '../Checkmark'
import DeleteButton from '../DeleteButton'

interface Props {
	id: string
	list: DocumentData
}

export default function List({ id, list }: Props) {
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

	async function deleteList(): Promise<void> {
		await deleteDoc(doc(getFirestore(), 'users', user.uid, 'lists', id))
	}

	return (
		<div className={styles.list}>
			<div className={styles.listName}>
				<Checkmark checked={complete ? true : false} />
				<Link className={styles.listLink} href={`/list/${id}`}>
					{list.listName}
				</Link>
			</div>
			<DeleteButton action={deleteList} />
		</div>
	)
}
