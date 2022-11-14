import { createContext } from 'react'
import { UserData } from '../lib/interfaces'

export const UserContext = createContext<UserData>({
	user: null
})
