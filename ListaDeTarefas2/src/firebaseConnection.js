import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDQaaa7f9bZ55EM8CjTU7uY5DEFiDkPL6s",
    authDomain: "lista-de-afazeres-2e389.firebaseapp.com",
    databaseURL: "https://lista-de-afazeres-2e389-default-rtdb.firebaseio.com",
    projectId: "lista-de-afazeres-2e389",
    storageBucket: "lista-de-afazeres-2e389.appspot.com",
    messagingSenderId: "1039777996297",
    appId: "1:1039777996297:web:8d08b8f8b1b9d0691d62d8",
    measurementId: "G-QRCP1K6F63"
  };
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }
  export default firebase;