import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

interface Props {
	children: string | JSX.Element
	fallback?: string | JSX.Element
}

export default function AuthCheck({ children, fallback }) {
	const { user } = useContext(UserContext)

	return user ? children : fallback
}
