// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFrestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjEmMTOjMiRF1kk7DQSceS9Gcle76-w3k",
  authDomain: "abiding-state-417404.firebaseapp.com",
  projectId: "abiding-state-417404",
  storageBucket: "abiding-state-417404.appspot.com",
  messagingSenderId: "28425563755",
  appId: "1:28425563755:web:05cf559d2039e64bda8b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFrestore(app)