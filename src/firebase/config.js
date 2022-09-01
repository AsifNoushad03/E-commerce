import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWSSpkpWQNk0e3jbFpDcBXi1DDQ1sJeFQ",
    authDomain: "ecommerce-shop-ee0a1.firebaseapp.com",
    projectId: "ecommerce-shop-ee0a1",
    storageBucket: "ecommerce-shop-ee0a1.appspot.com",
    messagingSenderId: "655711687305",
    appId: "1:655711687305:web:8c6c7361c6315cbf316c58",
    measurementId: "G-1MVV4YWPJB"
  };

  

  export default  firebase.initializeApp(firebaseConfig)