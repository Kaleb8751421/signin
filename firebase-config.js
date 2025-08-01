// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlibdJoxjkUbqB8zkTwmXBYq9p9iGify0",
  authDomain: "familysignin-e1834.firebaseapp.com",
  projectId: "familysignin-e1834",
  storageBucket: "familysignin-e1834.firebasestorage.app",
  messagingSenderId: "891391567970",
  appId: "1:891391567970:web:a3a1f9dc8d7fd6bf8cc93b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
