var firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBVPG7xGDAMsf0QViD4zvE7aALxY_Gi718",
    authDomain: "docstation-2dc9c.firebaseapp.com",
    databaseURL: "https://docstation-2dc9c.firebaseio.com",
    projectId: "docstation-2dc9c",
    storageBucket: "docstation-2dc9c.appspot.com",
    messagingSenderId: "932136343711"
};

firebase.initializeApp(config);

const database = firebase.database();
const firestore = firebase.firestore();

database.ref().set({
    test: "Firebase is set up!"
});

firestore.collection("collection").doc("doc").set({
    test: "Firebase is set up!"
});