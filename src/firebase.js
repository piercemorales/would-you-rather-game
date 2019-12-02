import firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBaMF3Ot_IKB9ScxPgGi4fJ5PVPP8i0bPY",
  authDomain: "pierce-morales-project-f-ef1c3.firebaseapp.com",
  databaseURL: "https://pierce-morales-project-f-ef1c3.firebaseio.com",
  projectId: "pierce-morales-project-f-ef1c3",
  storageBucket: "pierce-morales-project-f-ef1c3.appspot.com",
  messagingSenderId: "527917855228",
  appId: "1:527917855228:web:005ef6b7b58b07896d0279"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
