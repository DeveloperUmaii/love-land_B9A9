// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
//import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1wFdKFoR42LxJN6_EcGZmmLgqxfeUvoE",
  authDomain: "assignment-real-state-project.firebaseapp.com",
  projectId: "assignment-real-state-project",
  storageBucket: "assignment-real-state-project.firebasestorage.app",
  messagingSenderId: "804165885373",
  appId: "1:804165885373:web:502587532cebc3e20d46d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;