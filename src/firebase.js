// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwO8FKbrtBVxfkyFHDJCIV6_F1E8KEUz0",
  authDomain: "vault-games-studio-a1f7b.firebaseapp.com",
  projectId: "vault-games-studio-a1f7b",
  storageBucket: "vault-games-studio-a1f7b.appspot.com",
  messagingSenderId: "11069131557",
  appId: "1:11069131557:web:0c85e86998353e180a28cc",
  measurementId: "G-M6TQGP4320",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();

// export default db;

// const analytics = getAnalytics(app);
