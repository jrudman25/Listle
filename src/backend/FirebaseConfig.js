import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6NwbE_29QT3SRT0bopm_96BululBXzYk",
    authDomain: "tuneteaser.firebaseapp.com",
    projectId: "tuneteaser",
    storageBucket: "tuneteaser.appspot.com",
    messagingSenderId: "95304616444",
    appId: "1:95304616444:web:0123f10370c73d9f5aca79",
    measurementId: "G-QR8LYRQJDS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
