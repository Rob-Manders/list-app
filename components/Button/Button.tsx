import styles from './Button.module.scss'

interface ButtonProps {
	action: () => {}
	children: string | JSX.Element
}

export default function Button({ action, children }: ButtonProps) {
	return (
		<button className={styles.button} onClick={action}>
			{children}
		</button>
	)
}
