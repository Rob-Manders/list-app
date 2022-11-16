import styles from './DeleteButton.module.scss'
import Icon_Delete from '../icons/Icon_Delete'

export default function DeleteButton({ action }) {
	return (
		<button className={styles.deleteButton} onClick={action}>
			<Icon_Delete />
		</button>
	)
}
