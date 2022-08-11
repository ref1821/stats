import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuQuS6oa3pZyhnzQJ7Gd_lmcyQECr_xPE",
    authDomain: "it-s-stats-out.firebaseapp.com",
    projectId: "it-s-stats-out",
    storageBucket: "it-s-stats-out.appspot.com",
    messagingSenderId: "243964471891",
    appId: "1:243964471891:web:93b4a1b58e7b74ed0cb4a6",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;