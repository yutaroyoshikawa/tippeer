import '@firebase/firestore'
import * as firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
}

const myFirebaseApp = firebase.initializeApp(config)
const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);
export default new ReduxSagaFirebase(myFirebaseApp)