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
    appId: "1:592748544458:web:a0e90e231fb3dd8a314f33",
    measurementId: "G-RXSK5EY319"
};
if (!firebase.apps.length) {
    //Abrir minha conexao
    firebase.initializeApp(firebaseConfig);
}

export default firebase;