import styles from './List.module.scss'

export default function List({ list }) {
	return <div className={styles.list}>{list.listName}</div>
}
