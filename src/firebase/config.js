import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVT8aywsDnsSbi1oMmWUSEcYKvdcddqBY",
  authDomain: "cooking-ninja-site-a2257.firebaseapp.com",
  projectId: "cooking-ninja-site-a2257",
  storageBucket: "cooking-ninja-site-a2257.appspot.com",
  messagingSenderId: "585832912083",
  appId: "1:585832912083:web:07d5c764c64ea869177026",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
