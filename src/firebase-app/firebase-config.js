import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrXCo8Nvqc3uAnQuSjkIrUmDpkoMH0E74",
  authDomain: "monkey-blogging-49904.firebaseapp.com",
  projectId: "monkey-blogging-49904",
  storageBucket: "monkey-blogging-49904.appspot.com",
  messagingSenderId: "383942673729",
  appId: "1:383942673729:web:fca35ead80dcce4a600dc0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);