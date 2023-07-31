import firebase from 'firebase/app'

import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyB4DRjW5iG-5rqUeQ_0YpAJfEgkJ792xQk",
    authDomain: "block-de71e.firebaseapp.com",
    projectId: "block-de71e",
    databaseURL: "https://block-de71e-default-rtdb.firebaseio.com",
    storageBucket: "block-de71e.appspot.com",
    messagingSenderId: "931806238259",
    appId: "1:931806238259:web:0bef2b5823176fbda73546",
    measurementId: "G-53FSSJLY58"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase;
