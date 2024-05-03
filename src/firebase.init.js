// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4BHWApnKigEBGF7y-bv5nPXLRsJdJ4CY",
  authDomain: "jared-grimes-photographer.firebaseapp.com",
  projectId: "jared-grimes-photographer",
  storageBucket: "jared-grimes-photographer.appspot.com",
  messagingSenderId: "37739629884",
  appId: "1:37739629884:web:2ff1b7d7ebcc27762de239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

