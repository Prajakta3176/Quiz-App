// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzNussF0BIr8SqeLwCsoOclzZ8XeI-qRc",
  authDomain: "my-quiz-edc83.firebaseapp.com",
  projectId: "my-quiz-edc83",
  storageBucket: "my-quiz-edc83.firebasestorage.app",
  messagingSenderId: "1074552655079",
  appId: "1:1074552655079:web:3672b474c64c1e06b62642",
  measurementId: "G-94XF7KNTF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;