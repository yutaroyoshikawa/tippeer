import '@firebase/firestore'
import * as firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { firebaseConfig } from '../keys'

const myFirebaseApp = firebase.initializeApp(firebaseConfig)
const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);
export default new ReduxSagaFirebase(myFirebaseApp)
