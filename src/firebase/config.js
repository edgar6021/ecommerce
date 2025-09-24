import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDz6jHEfjAr3kFBevYqWBUo03qiPRMAYts",
  authDomain: "edgarshop-cfa10.firebaseapp.com",
  projectId: "edgarshop-cfa10",
  storageBucket: "edgarshop-cfa10.appspot.com",
  messagingSenderId: "900599247603",
  appId: "1:900599247603:web:d220568da0bcc777347d86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
