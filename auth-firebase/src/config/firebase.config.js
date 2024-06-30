// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {    
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    signInWithPopup
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPr-N8P452TEpqVC6d20c3vA3l_HmIlts",
  authDomain: "intento3-37a65.firebaseapp.com",
  projectId: "intento3-37a65",
  storageBucket: "intento3-37a65.appspot.com",
  messagingSenderId: "130588084589",
  appId: "1:130588084589:web:d742e81e6d301b5b2e7264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)

export { 
    db, 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    signInWithPopup
}