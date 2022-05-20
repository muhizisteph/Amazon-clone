import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbK2pEfr-Q6VPSEho13z7JtS_d2Sgfu0k",
    authDomain: "clone-80d39.firebaseapp.com",
    databaseURL: "https://clone-80d39.firebaseio.com",
    projectId: "clone-80d39",
    storageBucket: "clone-80d39.appspot.com",
    messagingSenderId: "731699533826",
    appId: "1:731699533826:web:7cbfc6a2dca711936b6f1b",
    measurementId: "G-FPGHE9S6HR"
  

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};