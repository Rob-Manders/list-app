import styles from './Layout.module.scss'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
	children: JSX.Element
}

export default function Layout({ children }: Props): JSX.Element {
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

			<nav>
				<Link href='/'>Home</Link>
				<h1>List App</h1>
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
