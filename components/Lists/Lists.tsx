import styles from 'Lists.module.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { collection, getFirestore } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import CreateList from '../CreateList'
import List from '../List/List'

export default function Lists(): JSX.Element {
	const { user } = useContext(UserContext)
	const [value, loading, error] = useCollection(
		collection(getFirestore(), 'users', user.uid, 'lists')
	)

	return (
		<div>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Collection: Loading...</span>}
			{value && (
				<span>
					{value.docs.map(list => (
						<List key={list.id} list={list.data()} />
					))}
				</span>
			)}

			<CreateList />
		</div>
	)
}
