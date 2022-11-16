import { doc, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import AuthCheck from '../../components/AuthCheck'
import Items from '../../components/Items'
import { auth } from '../../lib/firebase/auth'

export default function ListPage() {
	return (
		<AuthCheck fallback={<Fallback />}>
			<ListPageContent />
		</AuthCheck>
	)
}

function ListPageContent() {
	const router = useRouter()
	const { id } = router.query
	const uid = auth.currentUser.uid

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

function Fallback() {
	return <main>Please login to view your lists.</main>
}
