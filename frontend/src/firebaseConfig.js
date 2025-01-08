// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpQwQ24olw1KHRVWxArIR1RfxapBCAyAE",
  authDomain: "eam-backend-e1f09.firebaseapp.com",
  projectId: "eam-backend-e1f09",
  storageBucket: "eam-backend-e1f09.firebasestorage.app",
  messagingSenderId: "1087119504396",
  appId: "1:1087119504396:web:bb483499d4b0f14ff1aa29",
  measurementId: "G-P0J5F89FQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Export auth
