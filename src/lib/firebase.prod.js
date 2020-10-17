import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) When seeding the database you have to uncomment this!
// import { seedDatabase } from '../seed';

// 2) See the README for how to get this info
const config = {
    
};

const firebase = Firebase.initializeApp(config);

// 3) When seeding the database you have to uncomment this as well!

// 4) Once you have populated the database (***ONLY RUN ONCE***!), re-comment this so you don't get duplicate data.
// seedDatabase(firebase);

export { firebase };
