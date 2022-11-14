import styles from './SignInButton.module.scss'
import { auth, googleAuthProvider } from '../../lib/firebase/auth'
import { signInWithPopup } from 'firebase/auth'

export default function SignIn({}): JSX.Element {
	async function signIn() {
		await signInWithPopup(auth, googleAuthProvider)
	}

	return <button onClick={signIn}>Sign In</button>
}
