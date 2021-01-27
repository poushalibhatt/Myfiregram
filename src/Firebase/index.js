  // import * as firebase from 'firebase';
  import firebase from 'firebase/app';

  import 'firebase/storage';
  import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBatXCeVUs-pF-N-yxe4y-WEZuyGGRTbCE",
    authDomain: "myfiregram-2ae87.firebaseapp.com",
    projectId: "myfiregram-2ae87",
    storageBucket: "myfiregram-2ae87.appspot.com",
    messagingSenderId: "14643287850",
    appId: "1:14643287850:web:7b90812e9aa4dc5d687053",
    measurementId: "G-MS3RB0E7RT"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const projectFirestore= firebase.firestore();
  const timeStamp= firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timeStamp};

  // firestore- database
  // storage- to store images
  // projectStorage- anytime we want to do interaction with the storage, use this const.
  // projectFirestore- anytime we want to do interaction with the database, use this const.