import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfofVnUcDQ1sMIJra9TnnQyxPuYGAhwiY",
    authDomain: "linkdin-e49f6.firebaseapp.com",
    projectId: "linkdin-e49f6",
    storageBucket: "linkdin-e49f6.appspot.com",
    messagingSenderId: "145669857635",
    appId: "1:145669857635:web:8a1d2096ce3d735c32f356"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
export default firebase;