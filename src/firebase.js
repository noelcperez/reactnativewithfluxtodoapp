import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const database = firebase.database()

export default firebase
