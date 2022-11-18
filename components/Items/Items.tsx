import styles from './Items.module.scss'
import { collection, getFirestore } from 'firebase/firestore'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useCollection } from 'react-firebase-hooks/firestore'
import CreateItem from '../CreateItem'
import Item from '../Item/Item'

interface Props {
	id: string
}

export default function Items({ id }): JSX.Element {
	const { user } = useContext(UserContext)

	const [value, loading, error] = useCollection(
		collection(getFirestore(), 'users', user.uid, 'lists', id, 'items')
	)

	return (
		<div className={styles.items}>
			{error && <strong>Error: {JSON.stringify(error)}</strong>}
			{loading && <span>Collection: Loading...</span>}
			{value && (
				<>
					{value.docs.map(item => (
						<Item key={item.id} listId={id} id={item.id} item={item.data()} />
					))}
				</>
			)}
			<CreateItem listId={id} />
		</div>
	)
}
