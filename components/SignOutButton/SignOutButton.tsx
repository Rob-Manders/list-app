import styles from 'SignOutButton.module.scss'
import { auth } from '../../lib/firebase/auth'

export default function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>
}
