import firebase from 'firebase/app'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCV89EmQfLTOsIGb3FjlUKndoj6eWkh8fM",
    authDomain: "sistema-chamados-cda17.firebaseapp.com",
    projectId: "sistema-chamados-cda17",
    storageBucket: "sistema-chamados-cda17.appspot.com",
    messagingSenderId: "800277856419",
    appId: "1:800277856419:web:99f478d9915bbd8d1ebf16",
    measurementId: "G-3DZXL557JX"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;