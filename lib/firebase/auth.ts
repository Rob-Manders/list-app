import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth'
import { firebaseApp } from './app'

export const auth: Auth = getAuth(firebaseApp)
export const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider()
