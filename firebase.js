import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyB5xuwbhAbR8omh7QAqTKnX-9ydJYl1Rp0",
    authDomain: "signal-clone-ad7c3.firebaseapp.com",
    projectId: "signal-clone-ad7c3",
    storageBucket: "signal-clone-ad7c3.appspot.com",
    messagingSenderId: "866011631167",
    appId: "1:866011631167:web:8398bd7f98a6c34658328a"
};

const app = initializeApp(firebaseConfig)


const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }