// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

