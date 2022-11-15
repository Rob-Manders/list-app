import {
	doc,
	getDoc,
	getFirestore,
	serverTimestamp,
	setDoc
} from 'firebase/firestore'
import { createContext, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase/auth'
import { UserData } from '../lib/interfaces'

export const UserContext = createContext<UserData>({ user: null })

export default function UserContextProvider({ children }) {
	const [user] = useAuthState(auth)

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
		<UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
	)
}
