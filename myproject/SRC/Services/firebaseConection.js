import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
let firebaseConfig = {
  apiKey: "AIzaSyDne8AC2ZwX5Uifc-HLPXBkBnKQ4v7-D6Q",
  authDomain: "meuapp-c80fa.firebaseapp.com",
  databaseURL: "https://meuapp-c80fa.firebaseio.com",
  projectId: "meuapp-c80fa",
  storageBucket: "meuapp-c80fa.appspot.com",
  messagingSenderId: "592748544458",
  appId: "1:592748544458:web:5327b1583cbee3e1314f33",
  measurementId: "G-EEX6TWDGWJ",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
