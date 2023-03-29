import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJdiJGpJnnr-hfitLYzw2uGeYC5VVUkfI",
  authDomain: "myportfolio-2f63b.firebaseapp.com",
  projectId: "myportfolio-2f63b",
  storageBucket: "myportfolio-2f63b.appspot.com",
  messagingSenderId: "1090375032512",
  appId: "1:1090375032512:web:1d5a162d09c26cf4715725",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export function signInWithGoogle(password) {
  return signInWithPopup(auth, password);
}
export function singout() {
  return signOut(auth);
}
