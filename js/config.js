// ============ FIREBASE CONFIGURATION ============
const firebaseConfig = {
  apiKey: "AIzaSyDkviQFNMI4PpPlytRi6Va51_3vGva28Ms",
  authDomain: "myuserdatabase-3983d.firebaseapp.com",
  projectId: "myuserdatabase-3983d",
  storageBucket: "myuserdatabase-3983d.appspot.com",
  messagingSenderId: "166423678012",
  appId: "1:166423678012:web:896a59365cf5d6a1c90739",
  measurementId: "G-FCMX864P1R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();