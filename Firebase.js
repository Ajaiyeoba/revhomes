import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAll2ZRJkLe8x-SJYbQJR0QuxJc27rNsqY",
  authDomain: "revhomes-d19bc.firebaseapp.com",
  projectId: "revhomes-d19bc",
  storageBucket: "revhomes-d19bc.firebasestorage.app",
  messagingSenderId: "969394484887",
  appId: "1:969394484887:web:28657fa9fedb5cf2f0dbd2"
};
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export default database;