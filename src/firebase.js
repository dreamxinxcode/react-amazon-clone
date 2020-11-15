import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAB45mYV98hz7SgBSfx24DpD_RbYP-LM_s",
  authDomain: "react--clone-68d45.firebaseapp.com",
  databaseURL: "https://react--clone-68d45.firebaseio.com",
  projectId: "react--clone-68d45",
  storageBucket: "react--clone-68d45.appspot.com",
  messagingSenderId: "280882935312",
  appId: "1:280882935312:web:a37d312b6cf0cb45f33c95",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth };