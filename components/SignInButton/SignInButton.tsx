import styles from './SignInButton.module.scss'
import { auth, googleAuthProvider } from '../../lib/firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import Button from '../Button'

export default function SignIn({}): JSX.Element {
	async function signIn() {
		await signInWithPopup(auth, googleAuthProvider)
	}

	return <Button action={signIn}>Sign In</Button>
}
