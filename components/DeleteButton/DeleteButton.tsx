import styles from './DeleteButton.module.scss'
import Icon_Delete from '../icons/Icon_Delete'

interface Props {
	action: () => {}
}

export default function DeleteButton({ action }: Props): JSX.Element {
	return (
		<button className={styles.deleteButton} onClick={action}>
			<Icon_Delete />
		</button>
	)
}
