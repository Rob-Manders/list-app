import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import SignInButton from '../components/SignInButton'
import SignOutButton from '../components/SignOutButton'

export default function Home() {
	const { user } = useContext(UserContext)

	return (
		<div className={styles.container}>
			<Head>
				<title>List App</title>
				<meta
					name='description'
					content='A simple list app using Next.js and Firebase'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>List App</h1>

				{user ? <SignOutButton /> : <SignInButton />}
			</main>

			<footer className={styles.footer}>
				<a href='https://github.com/Rob-Manders/list-app' target='_blank'>
					GitHub
				</a>
			</footer>
		</div>
	)
}
