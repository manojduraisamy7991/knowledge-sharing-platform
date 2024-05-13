import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACwcrHU7nica3HDpIIzj2opxbeZM8ZR3k",
  authDomain: "knowledge-sharing-platfo-a78bc.firebaseapp.com",
  projectId: "knowledge-sharing-platfo-a78bc",
  storageBucket: "knowledge-sharing-platfo-a78bc.appspot.com",
  messagingSenderId: "656964983309",
  appId: "1:656964983309:web:7f563b331fbf35bfbe9344",
  measurementId: "G-FZP5FTSMMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);

