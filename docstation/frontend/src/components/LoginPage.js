import React from "react";
import { firebase, googleAuthProvider } from "../firebase";

const startLogin = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        alert("You are logged in");
    }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        console.log(error);
    });
};


class LoginPage extends React.Component {
    render() {
        return(
            <div>
                <button onClick={startLogin}>Login</button>
            </div>
        );
    }
}

export default LoginPage;