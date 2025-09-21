import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz8JXH46yd4ZQSNKkqdfD7Ag_yWn8CQKc",
  authDomain: "clone-2025-a2ce5.firebaseapp.com",
  projectId: "clone-2025-a2ce5",
  storageBucket: "clone-2025-a2ce5.firebasestorage.app",
  messagingSenderId: "957302968491",
  appId: "1:957302968491:web:84a8393da5628a1e74a7ee"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firebase();
//comment
