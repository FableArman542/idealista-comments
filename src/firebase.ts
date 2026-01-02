import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithCredential, signOut, onAuthStateChanged, User } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6GaYhy1t0QPhXITiwvxGNykf3jVDvEAI",
  authDomain: "idealista-comments.firebaseapp.com",
  projectId: "idealista-comments",
  storageBucket: "idealista-comments.firebasestorage.app",
  messagingSenderId: "446935726598",
  appId: "1:446935726598:web:b95b53035b02bd66eaa187",
  measurementId: "G-ZZ0SPCQ2TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Analytics might fail in extension environment due to CSP, careful usage recommended
// const analytics = getAnalytics(app); 
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, signInWithCredential, User, signOut, onAuthStateChanged, GoogleAuthProvider };

