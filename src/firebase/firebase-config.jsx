// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVeiQBEIHFK3kEOXlxmBT_JmkNhupKr4I",
  authDomain: "monkey-blog-ed7f4.firebaseapp.com",
  projectId: "monkey-blog-ed7f4",
  storageBucket: "monkey-blog-ed7f4.appspot.com",
  messagingSenderId: "840628243721",
  appId: "1:840628243721:web:9d96928b8c399f80c497d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);