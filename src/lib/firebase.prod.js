import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) When seeding the database you have to uncomment this!
// import { seedDatabase } from '../seed';

// 2) See the README for how to get this info
const config = {
    apiKey: "AIzaSyCYtAb_fQcpS-fkyMlisqtF1wR5WMaxeAQ",
    authDomain: "netflix-clone-a412a.firebaseapp.com",
    databaseURL: "https://netflix-clone-a412a.firebaseio.com",
    projectId: "netflix-clone-a412a",
    storageBucket: "netflix-clone-a412a.appspot.com",
    messagingSenderId: "746105988669",
    appId: "1:746105988669:web:6518dd9fe86b05f2146c54"
};

const firebase = Firebase.initializeApp(config);

// 3) When seeding the database you have to uncomment this as well!

// 4) Once you have populated the database (***ONLY RUN ONCE***!), re-comment this so you don't get duplicate data.
// seedDatabase(firebase);

export { firebase };
