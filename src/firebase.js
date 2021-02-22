import firebase from 'firebase'
// import firebase from '@firebase/app'
// import 'firebase/firestore'

const firebaseConfig = {
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase









