import firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDMloLrpBoex6MEAOD8M0mRoZm3KvZ15aE",
    authDomain: "to-do-app-50627.firebaseapp.com",
    databaseURL: "https://to-do-app-50627.firebaseio.com",
    projectId: "to-do-app-50627",
    storageBucket: "to-do-app-50627.appspot.com",
    messagingSenderId: "546740380863"
};
firebase.initializeApp(config);

export default firebase;