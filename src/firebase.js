// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-v2-d3a1f.firebaseapp.com",
  projectId: "x-next-v2-d3a1f",
  storageBucket: "x-next-v2-d3a1f.appspot.com",
  messagingSenderId: "445540646788",
  appId: "1:445540646788:web:86a095d9f58bf3eae4a7d1",
  measurementId: "G-960FLRMCEV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);