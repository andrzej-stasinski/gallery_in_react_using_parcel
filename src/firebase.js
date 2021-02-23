import firebase from 'firebase'

// config for Cloud Firestore & Realtime database
const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const DATABASE_URL = firebaseConfig.databaseURL

export default firebase









