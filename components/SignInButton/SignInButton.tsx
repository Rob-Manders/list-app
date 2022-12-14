import { auth, googleAuthProvider } from '../../lib/firebase/auth'
import { signInWithPopup } from 'firebase/auth'
import Button from '../Button'

export default function SignIn({}): JSX.Element {
	async function signIn(): Promise<void> {
		await signInWithPopup(auth, googleAuthProvider)
	}

	return <Button action={signIn}>Sign in with Google</Button>
}
