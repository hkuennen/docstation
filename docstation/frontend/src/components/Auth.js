import React, { Component } from 'react';
import { firebase } from '../firebase';

class Auth extends Component {
    state = { isSignedIn: false };

   componentDidMount () {
        return firebase.auth().onAuthStateChanged(user => {
            this.setState({isSignedIn: !!user});
            console.log("user", user);
            }
        )
    };

    render() {
        return (
            <div>
                {this.state.isSignedIn ? (<div>Signed in as {firebase.auth().currentUser.displayName}</div>
                ) : (
                    <div>Please log in</div>
                )}
            </div>
        )
    }
}

export default Auth