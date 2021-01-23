import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASJEkjO3gysHiesysywh5jQhG485QFqOQ",
  authDomain: "whatsapp-clone-733cb.firebaseapp.com",
  projectId: "whatsapp-clone-733cb",
  storageBucket: "whatsapp-clone-733cb.appspot.com",
  messagingSenderId: "476267077898",
  appId: "1:476267077898:web:6c975c6080ddcf4d3e9af3",
  measurementId: "G-P6L0Y4YFKF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
