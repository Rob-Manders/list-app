import styles from './CreateItem.module.scss'
import { useContext, useState } from 'react'
import useValidInput from '../../hooks/useValidInput'
import { UserContext } from '../../context/UserContext'
import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp
} from 'firebase/firestore'
import AddButton from '../AddButton'

export default function CreateItem({ listId }) {
	const [inputValue, setInputValue] = useState('')
	const [valid, setValid] = useState(false)
	const { validInput } = useValidInput()
	const { user } = useContext(UserContext)

	function onChange(event) {
		setInputValue(event.target.value)

		if (validInput(inputValue)) {
			setValid(true)
		} else {
			setValid(false)
		}
	}

	async function addItem(event) {
		event.preventDefault()

		if (valid) {
			const itemsCollection = collection(
				getFirestore(),
				'users',
				user.uid,
				'lists',
				listId,
				'items'
			)

			await addDoc(itemsCollection, {
				uid: user.uid,
				itemName: inputValue,
				complete: false,
				createdAt: serverTimestamp()
			})

			setInputValue('')
		}
	}

	return (
		<form className={styles.form} onSubmit={() => addItem(event)}>
			<input
				className={`${styles.input} ${
					inputValue.length > 0 &&
					(valid ? styles.validInput : styles.invalidInput)
				}`}
				name='listTitle'
				value={inputValue}
				onChange={onChange}
				placeholder='New List...'
			/>
			<AddButton />
		</form>
	)
}
