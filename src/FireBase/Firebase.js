import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3TQ_9H-2eXGwSpZC0LDPKfuwBCLsrMzs",
  authDomain: "react-router-project-90b0f.firebaseapp.com",
  projectId: "react-router-project-90b0f",
  storageBucket: "react-router-project-90b0f.appspot.com",
  messagingSenderId: "710926600903",
  appId: "1:710926600903:web:abefce2a9c0c086ced4ce2"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;


