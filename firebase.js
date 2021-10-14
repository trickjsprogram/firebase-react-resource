import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

var firebaseConfig = {
   // your firebase configuration goes here
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };
