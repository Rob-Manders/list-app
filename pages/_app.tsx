import '../styles/globals.scss'
import UserContextProvider from '../context/UserContext'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
	return (
		<UserContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserContextProvider>
	)
}
