import { FirebaseApp, getApp, initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyANov-8ThKPUdZCXvFTDY0t4pzPcGX-4j8',
	authDomain: 'list-app-1274c.firebaseapp.com',
	projectId: 'list-app-1274c',
	storageBucket: 'list-app-1274c.appspot.com',
	messagingSenderId: '853089963367',
	appId: '1:853089963367:web:c740a65ff461787a0033c2'
}

function createFirebaseApp(config): FirebaseApp {
	try {
		return getApp()
	} catch {
		return initializeApp(config)
	}
}

export const firebaseApp = createFirebaseApp(firebaseConfig)
