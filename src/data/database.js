// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ2HLR8WWYT0rZtP7RkE1-GI71dP4daoc",
  authDomain: "fed24-recipes.firebaseapp.com",
  projectId: "fed24-recipes",
  storageBucket: "fed24-recipes.firebasestorage.app",
  messagingSenderId: "414859609331",
  appId: "1:414859609331:web:98716a7e79783cf18e2386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }


