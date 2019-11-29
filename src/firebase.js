import firebase from "firebase/app";
import "firebase/database";

 const firebaseConfig = {
   apiKey: "AIzaSyAw2AFRCleo_E54vnkvFJXJx7ZO89kV2Cg",
   authDomain: "pierce-morales-project-five.firebaseapp.com",
   databaseURL: "https://pierce-morales-project-five.firebaseio.com",
   projectId: "pierce-morales-project-five",
   storageBucket: "pierce-morales-project-five.appspot.com",
   messagingSenderId: "897691297756",
   appId: "1:897691297756:web:cfe6a7c6dce33c699e1119"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
export default firebase;
