import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBUE0aR6T0f5iMPeEm4HbHDyEqj8i0BelE',
  authDomain: 'pcbuilder-react.firebaseapp.com',
  databaseURL: 'https://pcbuilder-react.firebaseio.com',
  projectId: 'pcbuilder-react',
  storageBucket: 'pcbuilder-react.appspot.com',
  messagingSenderId: '906650356898',
  appId: '1:906650356898:web:c0ee1119310d8f108ddbfb',
  measurementId: 'G-VSFPX65F02',
}

firebase.initializeApp(config)

// firetore service
const firestore = firebase.firestore()

export { firestore }
