import firebase from 'firebase/app'
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
// // Import the functions you need from the SDKs you need
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0s0PPSTApUma8tk3XdsZNvKT5RNjLbLg",
    authDomain: "real-time-227dd.firebaseapp.com",
    projectId: "real-time-227dd",
    storageBucket: "real-time-227dd.appspot.com",
    messagingSenderId: "581323973429",
    appId: "1:581323973429:web:46e4aa8aa6424be3d7e27c",
    measurementId: "G-9ZEQ6F6711"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('localhost', '8080');
}


export { db, auth }
export default firebase;