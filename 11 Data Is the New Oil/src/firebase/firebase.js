// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAR6dJvQG6JxAloCMp5sEgoN9nFyZkEHJg",
  authDomain: "tastebit-express.firebaseapp.com",
  projectId: "tastebit-express",
  storageBucket: "tastebit-express.appspot.com",
  messagingSenderId: "430834923065",
  appId: "1:430834923065:web:c5ae6b2767a7ee11953fe8",
  measurementId: "G-MXJCMJ0JMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}