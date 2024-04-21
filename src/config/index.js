// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAuislfrsi-it-_luh8lfr7j7NHLit2148",
  authDomain: "caotinho-bf58e.firebaseapp.com",
  projectId: "caotinho-bf58e",
  storageBucket: "caotinho-bf58e.appspot.com",
  messagingSenderId: "1011268283545",
  appId: "1:1011268283545:web:f37a2b1f51af259e359c08",
  measurementId: "G-3TEWNMECN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");