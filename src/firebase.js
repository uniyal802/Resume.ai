
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKU3iDScEoimBygwbH4unsyzn6kH21JAQ",
  authDomain: "resume-database-f5984.firebaseapp.com",
  projectId: "resume-database-f5984",
  storageBucket: "resume-database-f5984.firebasestorage.app",
  messagingSenderId: "456625533934",
  appId: "1:456625533934:web:cc942de3d69e75fc9e94ff",
  measurementId: "G-QWJC5JJKH8"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
const firestore = getFirestore(app);