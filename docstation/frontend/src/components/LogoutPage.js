import React from "react";
import { firebase } from "../firebase";

const startLogout = () => {
    return firebase.auth().signOut().then(function () {
        alert("You are logged out");
    }).catch(function (error) {
        console.log(error);
    });
};


class LogoutPage extends React.Component {
    render() {
        return(
            <div>
                <button onClick={startLogout}>Logout</button>
            </div>
        );
    }
}

export default LogoutPage;