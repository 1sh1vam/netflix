import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from "../seed"

const firebaseConfig = {
    apiKey: "AIzaSyBeyBXj6wBO4KNWtA2hrb0K8c6qCD8kamA",
    authDomain: "netflix-bd20d.firebaseapp.com",
    projectId: "netflix-bd20d",
    storageBucket: "netflix-bd20d.appspot.com",
    messagingSenderId: "576736608894",
    appId: "1:576736608894:web:5530754a775a7c3b2c8e2f",
    measurementId: "G-QSD0Z2EZBX"
  };


const firebase = Firebase.initializeApp(firebaseConfig)

// seedDatabase(firebase)
export {firebase}