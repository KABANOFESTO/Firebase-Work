// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7__4XvJic3KeVgKMfxuX2IOnlPV_pp-g",
    authDomain: "udemy-modern-javascript-ef4ad.firebaseapp.com",
    projectId: "udemy-modern-javascript-ef4ad",
    storageBucket: "udemy-modern-javascript-ef4ad.appspot.com",
    messagingSenderId: "259263843546",
    appId: "1:259263843546:web:c846ffca1d53629b01a9e3",
    measurementId: "G-RM3TV19S4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);