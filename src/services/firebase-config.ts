// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXBCMq0n-P6DrnDcRlhNAYWbKJVmtFa0",
  authDomain: "my-portfolio-d1523.firebaseapp.com",
  projectId: "my-portfolio-d1523",
  storageBucket: "my-portfolio-d1523.appspot.com",
  messagingSenderId: "200227061415",
  appId: "1:200227061415:web:e7b6be23e209afbec5a582",
  measurementId: "G-XGT90JC7SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
