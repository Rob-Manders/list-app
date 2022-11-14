import '../styles/globals.scss'
import { UserContext } from '../context/UserContext'
import useUserData from '../hooks/useUserData'
import { useEffect } from 'react'
import {
	doc,
	getDoc,
	getFirestore,
	setDoc,
	serverTimestamp
} from 'firebase/firestore'

function MyApp({ Component, pageProps }) {
	const { user } = useUserData()

	useEffect(() => {
		// Add user to database if  they don't exist.
		async function addUser() {
			const userDoc = doc(getFirestore(), 'users', user.uid)
			const userSnapshot = await getDoc(userDoc)

			if (!userSnapshot.exists()) {
				await setDoc(userDoc, {
					uid: user.uid,
					displayName: user.displayName,
					createdAt: serverTimestamp()
				})
			}
		}

		if (user) addUser()
	}, [user])

	return (
		<UserContext.Provider value={{ user }}>
			<Component {...pageProps} />
		</UserContext.Provider>
	)
}

export default MyApp
