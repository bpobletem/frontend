// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJWDLRHnf5JcHDI_CxXhlAM8GJO2rEMtk",
  authDomain: "desafio-firebase-dd17e.firebaseapp.com",
  projectId: "desafio-firebase-dd17e",
  storageBucket: "desafio-firebase-dd17e.appspot.com",
  messagingSenderId: "218333951837",
  appId: "1:218333951837:web:f822ee7358332d978d5ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }