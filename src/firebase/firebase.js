import { initializeApp } from "firebase/app";
import {  getAuth,signInWithPopup, signOut } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDxsfSM91vfVpoM1UMbs_4ABMmy3nzWpG8",
  authDomain: "protofolio-64812.firebaseapp.com",
  projectId: "protofolio-64812",
  storageBucket: "protofolio-64812.appspot.com",
  messagingSenderId: "678049566053",
  appId: "1:678049566053:web:a0f6fcd2111706e451658c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export function signInWithGoogle( password) {
    return signInWithPopup(auth, password)
}
export function singout() {
  return signOut(auth)
}
