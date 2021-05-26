import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
var firebaseConfig = {
    apiKey: "AIzaSyDAxz-kLJxldo_lRUyD9_PODB7Gamkcidw",
    authDomain: "desafio-alest-32128.firebaseapp.com",
    projectId: "desafio-alest-32128",
    storageBucket: "desafio-alest-32128.appspot.com",
    messagingSenderId: "49532462210",
    appId: "1:49532462210:web:af431d2351212e36c5c09b",
    measurementId: "G-7Q91TMY985"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();