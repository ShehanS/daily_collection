// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzmbdDQxMsuSsvRNuj6VY01z5TTRKGOok",
    authDomain: "ama-project-be225.firebaseapp.com",
    databaseURL: "https://ama-project-be225-default-rtdb.firebaseio.com",
    projectId: "ama-project-be225",
    storageBucket: "ama-project-be225.appspot.com",
    messagingSenderId: "108044272749",
    appId: "1:108044272749:web:e4a025f7fd60f659d72b64",
    measurementId: "G-B3GPZ84JX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);
