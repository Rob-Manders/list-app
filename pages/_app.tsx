import '../styles/globals.css'
import { UserContext } from '../context/UserContext'
import useUser from '../hooks/useUserData'

function MyApp({ Component, pageProps }) {
	const { user } = useUser()

	return (
		<UserContext.Provider value={{ user }}>
			<Component {...pageProps} />
		</UserContext.Provider>
	)
}

export default MyApp
