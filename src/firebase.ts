
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCU6d6soRe1Kk1gLnSya7AsfojvxVhJg14",
  authDomain: "saas-estudio.firebaseapp.com",
  projectId: "saas-estudio",
  storageBucket: "saas-estudio.firebasestorage.app",
  messagingSenderId: "643396649872",
  appId: "1:643396649872:web:6be8e5c2c401367c89e915",
  measurementId: "G-5LS9MGQLK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;