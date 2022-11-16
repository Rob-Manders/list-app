import styles from '../styles/Home.module.scss'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import SignInButton from '../components/SignInButton'
import SignOutButton from '../components/SignOutButton'
import Lists from '../components/Lists'

export default function Home() {
	const { user } = useContext(UserContext)

	return (
		<>
			{user ? (
				<>
					<Lists />
					<SignOutButton />
				</>
			) : (
				<>
					<p>A simple checklist app for all your checklist needs.</p>
					<h2>Get started...</h2>
					<SignInButton />
				</>
			)}
		</>
	)
}
