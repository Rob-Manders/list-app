import Icon_RadioChecked from '../icons/Icon_RadioChecked'
import Icon_RadioUnchecked from '../icons/Icon_RadioUnchecked'
import styles from './Checkmark.module.scss'

interface Props {
	checked?: boolean
	action?: () => {}
}

export default function Checkmark({
	checked = false,
	action
}: Props): JSX.Element {
	return (
		<button
			onClick={action ? action : null}
			className={`
				${styles.checkmarkButton} 
				${checked ? styles.checked : styles.unchecked} 
				${action && styles.clickable}`}
		>
			{checked ? <Icon_RadioChecked /> : <Icon_RadioUnchecked />}
		</button>
	)
}
