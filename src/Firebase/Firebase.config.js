// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARRtk4HhmiggxRTtSMxXjvLGYgLlKnM6E",
    authDomain: "task-manage-27a68.firebaseapp.com",
    projectId: "task-manage-27a68",
    storageBucket: "task-manage-27a68.appspot.com",
    messagingSenderId: "801635864251",
    appId: "1:801635864251:web:5a0141f1a1dfce6cea639e",
    measurementId: "G-8J338N91VZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

