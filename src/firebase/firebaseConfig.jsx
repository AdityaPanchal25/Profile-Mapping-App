// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn_zRpq7oZFuhA-xVEF-3kuSEDSxWe_jc",
  authDomain: "profilemappingbynry.firebaseapp.com",
  projectId: "profilemappingbynry",
  storageBucket: "profilemappingbynry.appspot.com",
  messagingSenderId: "1000163989963",
  appId: "1:1000163989963:web:b3c9d2209cfeb1657d3e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb=getFirestore(app);
const storage=getStorage(app);

export{fireDb,storage}