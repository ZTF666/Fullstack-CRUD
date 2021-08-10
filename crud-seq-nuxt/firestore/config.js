import firebase from 'firebase/app'
import 'firebase/storage';   


var firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
    databaseURL: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp