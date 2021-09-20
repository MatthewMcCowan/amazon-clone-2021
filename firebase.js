import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArEAs4Bhz_ys2Z_U1bE9h9-6lKFUBRftA",
  authDomain: "amzn-clone2021.firebaseapp.com",
  projectId: "amzn-clone2021",
  storageBucket: "amzn-clone2021.appspot.com",
  messagingSenderId: "720493855901",
  appId: "1:720493855901:web:fad682566e52ac80e38074",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export { db };
