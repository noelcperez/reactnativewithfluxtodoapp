import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCZilHiDEBQsa51h7-hhsOYFOuSMkmnfeE',
  authDomain: 'reactnativetodo-fd621.firebaseapp.com',
  databaseURL: 'https://reactnativetodo-fd621.firebaseio.com',
  projectId: 'reactnativetodo-fd621',
  storageBucket: '',
  messagingSenderId: '630391448503'
}

firebase.initializeApp(config)

export const database = firebase.database()
export const storage = firebase.storage()

export default firebase
