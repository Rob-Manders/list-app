import styles from './Layout.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Icon_Home from '../icons/Icon_Home'
import { UserContext } from '../../context/UserContext'
import { useContext } from 'react'
import useGetFirstName from '../../hooks/useGetFirstName'

interface Props {
	children: JSX.Element
}

export default function Layout({ children }: Props): JSX.Element {
	const { user } = useContext(UserContext)
	const { getFirstName } = useGetFirstName()

	const firstName = user ? getFirstName(user.displayName) : ''

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

			<nav className={styles.nav}>
				<Link className={styles.homeLink} href='/'>
					<Icon_Home />
				</Link>
				<h1 className={styles.header}>
					{user ? `${firstName}'s Lists` : 'List App'}
				</h1>
			</nav>

			{children}

			<footer className={styles.footer}>
				<a href='https://github.com/Rob-Manders/list-app' target='_blank'>
					GitHub
				</a>
			</footer>
		</div>
	)
}
