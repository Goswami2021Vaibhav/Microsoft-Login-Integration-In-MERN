import { getAuth, OAuthProvider } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ms-login-6a1e9.firebaseapp.com",
    projectId: "ms-login-6a1e9",
    storageBucket: "ms-login-6a1e9.firebasestorage.app",
    messagingSenderId: "556129953836",
    appId: "1:556129953836:web:419cb434ce2f95f1b8c989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new OAuthProvider('microsoft.com')

export { auth, provider }