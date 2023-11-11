// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXSd8VTsR2qJFkW45hShl6dwYaamLdqMA",
  authDomain: "gamer-store-coder.firebaseapp.com",
  projectId: "gamer-store-coder",
  storageBucket: "gamer-store-coder.appspot.com",
  messagingSenderId: "515488733427",
  appId: "1:515488733427:web:01a72d30625670831bbf86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)