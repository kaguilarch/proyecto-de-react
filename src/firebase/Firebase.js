// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnQ0rKfZv-555iUDfm_JqldcTnRdPkqZc",
  authDomain: "proyecto-react-610f7.firebaseapp.com",
  projectId: "proyecto-react-610f7",
  storageBucket: "proyecto-react-610f7.appspot.com",
  messagingSenderId: "113517998515",
  appId: "1:113517998515:web:d4403c69e63ca514c95bc6",
  measurementId: "G-WB7QTEW208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);