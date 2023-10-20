import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9uJss6bgjQPNgarywKb13QfS_J4RD0mQ",
  authDomain: "netflix-clone-5d4df.firebaseapp.com",
  projectId: "netflix-clone-5d4df",
  storageBucket: "netflix-clone-5d4df.appspot.com",
  messagingSenderId: "138528267578",
  appId: "1:138528267578:web:fa060423a942c8109bc403",
  measurementId: "G-YMD2ZL07JJ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
