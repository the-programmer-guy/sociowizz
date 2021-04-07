import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMtlBdZUT3oHZjlpaq7Ny-C2oBsR_HWfk",
  authDomain: "sociowizz.firebaseapp.com",
  databaseURL: "https://sociowizz-default-rtdb.firebaseio.com",
  projectId: "sociowizz",
  storageBucket: "sociowizz.appspot.com",
  messagingSenderId: "626612799215",
  appId: "1:626612799215:web:8f80bbfbc04d8d90737d1a"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
