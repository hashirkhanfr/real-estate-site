import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBzpYJ9nbSYoK6VfjsK73jZayMwVGbVr8",
    authDomain: "al-rafay.firebaseapp.com",
    projectId: "al-rafay",
    storageBucket: "al-rafay.firebasestorage.app",
    messagingSenderId: "269505093508",
    appId: "1:269505093508:web:aa4f24137de54e224787d1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
