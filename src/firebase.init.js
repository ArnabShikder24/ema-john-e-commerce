// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9OR-YSq18_FzwWm7tzpZnTFgXg4QfNPY",
  authDomain: "ema-john-simple-f79ee.firebaseapp.com",
  projectId: "ema-john-simple-f79ee",
  storageBucket: "ema-john-simple-f79ee.appspot.com",
  messagingSenderId: "917452930925",
  appId: "1:917452930925:web:365d598c6f2d932dffa464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;