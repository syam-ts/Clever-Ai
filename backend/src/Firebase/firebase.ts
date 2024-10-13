import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
 
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "clever-ai-5bc0c.firebaseapp.com",
  projectId: "clever-ai-5bc0c",
  storageBucket: "clever-ai-5bc0c.appspot.com",
  messagingSenderId: "1071752747014",
  appId: "1:1071752747014:web:e11009f9f2b20d6264cb87"
};
 
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
