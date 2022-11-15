import styles from './Items.module.scss'
import { collection, doc, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useCollection } from 'react-firebase-hooks/firestore'
import CreateItem from '../CreateItem'
import Item from '../Item/Item'

export default function Items({ id }) {
	const { user } = useContext(UserContext)

	const [value, loading, error] = useCollection(
		collection(getFirestore(), 'users', user.uid, 'lists', id, 'items')
	)

	return (
		<div>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Collection: Loading...</span>}
			{value && (
				<span>
					{value.docs.map(item => (
						<Item key={item.id} listId={id} id={item.id} item={item.data()} />
					))}
				</span>
			)}
			<CreateItem listId={id} />
		</div>
	)
}
