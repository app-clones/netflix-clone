import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) When seeding the database you have to uncomment this!
// import { seedDatabase } from '../seed';

// 2) See the README for how to get this info
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.APP_REACT_APP_ID
};

const firebase = initializeApp(config);

// 3) When seeding the database you have to uncomment this as well!

// 4) Once you have populated the database (***ONLY RUN ONCE***!), re-comment this so you don't get duplicate data.
// seedDatabase(firebase);

export { firebase };
