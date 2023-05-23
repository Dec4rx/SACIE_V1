// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAk3gGbFJT3PV-pU_bNc85zw3hMbFtzLQs",
  authDomain: "sacie-51f52.firebaseapp.com",
  projectId: "sacie-51f52",
  storageBucket: "sacie-51f52.appspot.com",
  messagingSenderId: "71104579291",
  appId: "1:71104579291:web:13d4e213a2a13ff0782efe",
  measurementId: "G-WLKFCPX888"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase};