import styles from './CreateList.module.scss'
import { useContext, useState } from 'react'
import useValidInput from '../../hooks/useValidInput'
import { UserContext } from '../../context/UserContext'
import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp
} from 'firebase/firestore'
import { useRouter } from 'next/router'
import AddButton from '../AddButton/AddButton'

export default function CreateList(): JSX.Element {
	const [inputValue, setInputValue] = useState('')
	const [valid, setValid] = useState(false)
	const { validInput } = useValidInput()
	const { user } = useContext(UserContext)
	const router = useRouter()

	function onChange(event): void {
		setInputValue(event.target.value)

		if (validInput(inputValue)) {
			setValid(true)
		} else {
			setValid(false)
		}
	}

	async function addList(event): Promise<void> {
		event.preventDefault()

		if (valid) {
			const listsCollection = collection(
				getFirestore(),
				'users',
				user.uid,
				'lists'
			)
			const newList = await addDoc(listsCollection, {
				uid: user.uid,
				listName: inputValue,
				createdAt: serverTimestamp()
			})

			router.push(`/list/${newList.id}`)
		}
	}

	return (
		<form className={styles.form} onSubmit={() => addList(event)}>
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
