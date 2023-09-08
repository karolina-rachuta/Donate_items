// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // apiKey:"AIzaSyDtGIoMjKOeSeTwM3BLxgZL4aoxz7QhXZ0",
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "oddajrzeczy-af47c.firebaseapp.com",
    projectId: "oddajrzeczy-af47c",
    storageBucket: "oddajrzeczy-af47c.appspot.com",
    messagingSenderId: "842213885523",
    appId: "1:842213885523:web:5cdb04de2a930ade4c28a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);