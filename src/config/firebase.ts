import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

import "firebase/storage";

const firebaseConfig = {
	appId: process.env.REACT_APP_APP_ID,
	apiKey: process.env.REACT_APP_API_KEY,
	projectId: process.env.REACT_APP_PROJECT_ID,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const app = initializeApp(firebaseConfig);

const dbFireStore = getFirestore(app);

const storageBucket = getStorage(app);

const auth = getAuth(app);

auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

export { app, dbFireStore, storageBucket, provider, auth };
