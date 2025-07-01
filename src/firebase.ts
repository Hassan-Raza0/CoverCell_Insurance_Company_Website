// src/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwWWPesGPBriKQVn-xdTp_jFyp83Tkwlc",
  authDomain: "covercell-insurance.firebaseapp.com",
  projectId: "covercell-insurance",
  storageBucket: "covercell-insurance.appspot.com",
  messagingSenderId: "1067524823427",
  appId: "1:1067524823427:web:4fffc43da5f10b892e7eb6",
  measurementId: "G-QGZ9ENXHSY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;