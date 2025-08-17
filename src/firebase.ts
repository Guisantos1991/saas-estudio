import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCU6d6soRe1Kk1gLnSya7AsfojvxVhJg14",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "saas-estudio.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "saas-estudio",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "saas-estudio.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "643396649872",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:643396649872:web:6be8e5c2c401367c89e915",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-5LS9MGQLK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;