// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEsE7lB2NHl2Rr9n2rxBQuSN8ktXLS70o",
  authDomain: "quiz-57746.firebaseapp.com",
  projectId: "quiz-57746",
  storageBucket: "quiz-57746.firebasestorage.app",
  messagingSenderId: "135021343822",
  appId: "1:135021343822:web:5d31327e938d029891bf1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth  = getAuth();
export const db = getFirestore(app); 
export default app;