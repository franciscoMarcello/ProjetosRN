import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
   apiKey: "AIzaSyAQ4UzjpQ0Mz7nmnLMpOv-gIoCi0igreZ4",
   authDomain: "greencontrol-5fe3c.firebaseapp.com",
   databaseURL: "https://greencontrol-5fe3c-default-rtdb.firebaseio.com",
   projectId: "greencontrol-5fe3c",
   storageBucket: "greencontrol-5fe3c.appspot.com",
   messagingSenderId: "700923119764",
   appId: "1:700923119764:web:7a243d6f742d6e68cecc81",
   measurementId: "G-3R26P1K77N"
 };
 // Initialize Firebase
 if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
 }

 
export default firebase;
  