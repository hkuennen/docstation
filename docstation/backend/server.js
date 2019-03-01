const express = require('express');
const firebase = require('firebase');

const app = express();

const port = process.env.PORT || 3001;

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

database.ref().set({
    test: "Firebase is set up!"
});

app.get('/', function (req, res) {
    res.send('<h1>Hello and welcome to the DocStation App from Express!</h1>')
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}!`);
});
