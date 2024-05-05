// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRwhDVtr123HhBTSJF6PDRTVXGPoFTWGw",
  authDomain: "realtor-app-66ca5.firebaseapp.com",
  projectId: "realtor-app-66ca5",
  storageBucket: "realtor-app-66ca5.appspot.com",
  messagingSenderId: "267953548215",
  appId: "1:267953548215:web:a2e9b0e3a9cdd288dfd632"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db=getFirestore()
