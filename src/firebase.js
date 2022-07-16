import { initializeApp } from "firebase/app";
import { getAuth ,  RecaptchaVerifier  , signInWithPhoneNumber   } from "firebase/auth";
import { collection, doc, setDoc , getDoc , getDocs , getFirestore , where , query , orderBy } from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_FIREBASE_STOARGE_BUCKET ,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID ,
  measurementId:  process.env.REACT_APP_FIREBASE_MEASURE_ID
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth , RecaptchaVerifier , signInWithPhoneNumber   , collection , doc , setDoc , db , getDoc , getDocs , where , query , orderBy} ;



// const analytics = getAnalytics(app);