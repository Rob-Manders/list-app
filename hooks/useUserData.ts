import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase/auth'
import { UserData } from '../lib/interfaces'

export default function useUser(): UserData {
	const [user] = useAuthState(auth)

	return { user }
}
