import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBJVOlkcmxR8IMJw7DTtXm7R__3XYy7P34",
  authDomain: "e-library-5e3d5.firebaseapp.com",
  projectId: "e-library-5e3d5",
  storageBucket: "e-library-5e3d5.appspot.com",
  messagingSenderId: "1006046197134",
  appId: "1:1006046197134:web:76603a4c945272b8d020df",
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
