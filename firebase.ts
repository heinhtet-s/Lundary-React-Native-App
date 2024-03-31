// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDepbRHXvW6kKxrIhkDu0hl33qioCu5Ecs",
  authDomain: "lundary-app.firebaseapp.com",
  projectId: "lundary-app",
  storageBucket: "lundary-app.appspot.com",
  messagingSenderId: "983680280827",
  appId: "1:983680280827:web:042a2cf917c4945ffea85e",
  measurementId: "G-RRV11X9KB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) as any;

const db = getFirestore();

export { auth, db };
