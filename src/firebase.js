import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // Add your Firebase configuration details here
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "vault-games-studio-a1f7b",
  // ...
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
