import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBn7WpbYO1ay0fkH4KYofZ53pSrllS6scw",
    authDomain: "netflix-yt-8c525.firebaseapp.com",
    projectId: "netflix-yt-8c525",
    storageBucket: "netflix-yt-8c525.appspot.com",
    messagingSenderId: "40471579299",
    appId: "1:40471579299:web:14a4b3063eb7e1cad88d16"
}

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };