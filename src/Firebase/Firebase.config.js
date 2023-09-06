// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Zecxt57WbVJgbTYW3ozzAW_5zSgKmFQ",
  authDomain: "hotel-firebase-context-website.firebaseapp.com",
  projectId: "hotel-firebase-context-website",
  storageBucket: "hotel-firebase-context-website.appspot.com",
  messagingSenderId: "1031279377875",
  appId: "1:1031279377875:web:43d449bc1edb5d87a74326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;