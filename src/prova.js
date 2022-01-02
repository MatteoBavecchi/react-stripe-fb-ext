import firebase from "firebase/compat/app";

firebase.initializeApp({
    apiKey: "AIzaSyBE7JMBahNx-3DmBzJLDVd9xIO3msRjwrc",
    authDomain: "auth-test-99d38.firebaseapp.com",
    projectId: "auth-test-99d38",
});

var db = firebase.firestore();

console.log(db);