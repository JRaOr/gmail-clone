import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9lpRhNPL_kacZitCW1DbfX6h3xibIhJk",
    authDomain: "clone-96f35.firebaseapp.com",
    projectId: "clone-96f35",
    storageBucket: "clone-96f35.appspot.com",
    messagingSenderId: "116544233620",
    appId: "1:116544233620:web:6469d33c2dd8657c6c9481",
    measurementId: "G-MF4BS88PHX"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider}