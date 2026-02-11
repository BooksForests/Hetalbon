// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS3Hh3lFLsSRRsuYnfxPeCMXCoKK9pfik",
  authDomain: "hetalbon-9ac56.firebaseapp.com",
  projectId: "hetalbon-9ac56",
  storageBucket: "hetalbon-9ac56.appspot.com",
  messagingSenderId: "723166797579",
  appId: "1:723166797579:web:14184accd9057f2c0b4c0e",
  measurementId: "G-Z5PTDTTBYH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
