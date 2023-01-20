// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE936Z6gYYiqxxPwLNDgbKOHtsAXd0C0E",
  authDomain: "bookworms-4cb19.firebaseapp.com",
  projectId: "bookworms-4cb19",
  storageBucket: "bookworms-4cb19.appspot.com",
  messagingSenderId: "1096712885617",
  appId: "1:1096712885617:web:5b910b1560c6d753a5d2d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
