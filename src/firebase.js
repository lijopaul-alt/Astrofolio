import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCQe5hFV8-wlUd_UfNOv9UCDGSHD-boAwM",
  authDomain: "astrofolio-bdbf6.firebaseapp.com",
  projectId: "astrofolio-bdbf6",
  storageBucket: "astrofolio-bdbf6.appspot.com",
  messagingSenderId: "904632863448",
  appId: "1:904632863448:web:91587adb334c2143fd65ad",
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire.database().ref();
