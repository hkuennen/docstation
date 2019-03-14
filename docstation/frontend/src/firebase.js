import React from 'react';
const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBVPG7xGDAMsf0QViD4zvE7aALxY_Gi718",
    authDomain: "docstation-2dc9c.firebaseapp.com",
    databaseURL: "https://docstation-2dc9c.firebaseio.com",
    projectId: "docstation-2dc9c",
    storageBucket: "docstation-2dc9c.appspot.com",
    messagingSenderId: "932136343711",
    clientId: "932136343711-ehvp963a9mkkvhsnethkosovkl5j4uja.apps.googleusercontent.com"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.addScope('profile');
googleAuthProvider.addScope('email');
googleAuthProvider.addScope('https://www.googleapis.com/auth/plus.me');

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        database.ref('users/' + user.uid + '/uid').once('value')
            .then(function (snapshot) {
                if (snapshot.val() === user.uid) {
                    console.log('User already exists');
                } else {
                    console.log(snapshot.val());
                    database.ref('users/' + user.uid).set({
                        uid: user.uid,
                        name: user.displayName
                    });
                }
            })
            .catch( function (e) {
                console.log("Error fetching data", e)
            });
    } else {
        console.log("There's no user logged in.")
    }
});


export { firebase, googleAuthProvider, database }