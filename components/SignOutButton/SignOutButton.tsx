import styles from 'SignOutButton.module.scss'
import { auth } from '../../lib/firebase/auth'
import Button from '../Button'

export default function SignOutButton(): JSX.Element {
	return <Button action={() => auth.signOut()}>Sign Out</Button>
}
