// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbm6fUJDkb6c58GX_7xkdUvwfEJsA5yu8",
  authDomain: "nike-shoes-ecommerce.firebaseapp.com",
  projectId: "nike-shoes-ecommerce",
  storageBucket: "nike-shoes-ecommerce.appspot.com",
  messagingSenderId: "1091675807932",
  appId: "1:1091675807932:web:bdcd5033006f0553ebb0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
