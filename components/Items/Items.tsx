import styles from './Items.module.scss'
import { collection, doc, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import {
	useCollection,
	useDocumentDataOnce
} from 'react-firebase-hooks/firestore'

export default function Items({ id }) {
	const { user } = useContext(UserContext)

	const [value, loading, error] = useCollection(
		collection(getFirestore(), 'users', user.uid, 'lists', id, 'items')
	)

	return <>{id}</>
}
