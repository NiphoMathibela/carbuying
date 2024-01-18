// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmc3HuCT7RW_wcvFZbt5pjBqdZBzLXU5U",
  authDomain: "upwheelauth.firebaseapp.com",
  projectId: "upwheelauth",
  storageBucket: "upwheelauth.appspot.com",
  messagingSenderId: "92762857679",
  appId: "1:92762857679:web:5919fe9b5d7e87d14e17ba",
  measurementId: "G-RHEY9HSN6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

