import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDne8AC2ZwX5Uifc-HLPXBkBnKQ4v7-D6Q",
  authDomain: "meuapp-c80fa.firebaseapp.com",
  databaseURL: "https://meuapp-c80fa.firebaseio.com",
  projectId: "meuapp-c80fa",
  storageBucket: "meuapp-c80fa.appspot.com",
  messagingSenderId: "592748544458",
  appId: "1:592748544458:web:453e94f0bed32554314f33",
  measurementId: "G-KNJR5ME0RN"
};
if (!firebase.apps.length) {

  firebase.initializeApp(firebaseConfig);
}

export default firebase;