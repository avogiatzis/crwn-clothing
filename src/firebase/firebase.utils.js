import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";


const config= {
    apiKey: "AIzaSyDV5uSCh3NR57giTi2HIBjxX8lAMjtBTkQ",
    authDomain: "crwn-db-20639.firebaseapp.com",
    projectId: "crwn-db-20639",
    storageBucket: "crwn-db-20639.appspot.com",
    messagingSenderId: "853499089413",
    appId: "1:853499089413:web:35182b8615771778f6026c"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;