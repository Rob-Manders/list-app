import { doc, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import Items from '../../components/Items'

export default function ListPage() {
	const { user } = useContext(UserContext)

	const router = useRouter()
	const { id } = router.query

	const listRef = doc(getFirestore(), 'users', user.uid, 'lists', id.toString())
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
