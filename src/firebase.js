// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjFwRQNVAJXjU0rYVAgBf6CqHStrjX0ZE",
  authDomain: "online-ecommerce-store-f8e57.firebaseapp.com",
  projectId: "online-ecommerce-store-f8e57",
  storageBucket: "online-ecommerce-store-f8e57.appspot.com",
  messagingSenderId: "729545811597",
  appId: "1:729545811597:web:e2c073165691220291e4c4",
  measurementId: "G-61DWZ0JX91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)