import { doc, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import Items from '../../components/Items'

export default function ListPage() {
	const router = useRouter()
	const { uid, id } = router.query

	const listRef =
		uid &&
		id &&
		doc(getFirestore(), 'users', uid.toString(), 'lists', id.toString())

	const [value, loading, error] = useDocumentDataOnce(listRef)

	return (
		<main>
			{loading && 'Loading...'}
			{error && 'Unable to load list...'}
			{value && (
				<>
					<h1>{value.listName}</h1>
					<Items id={id.toString()} />
				</>
			)}
		</main>
	)
}
