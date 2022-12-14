import styles from './AddButton.module.scss'
import Icon_AddTask from '../icons/Icon_AddTask'

export default function AddButton(): JSX.Element {
	return (
		<button className={styles.addButton} type='submit'>
			<Icon_AddTask />
		</button>
	)
}
