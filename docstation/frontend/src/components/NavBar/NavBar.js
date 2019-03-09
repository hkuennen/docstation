import React from "react";
import img from "../../assets/profilepicture.jpg";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { firebase, googleAuthProvider } from "../../firebase";
import "./NavBar.css";

let profilePic = document.querySelector('#profilePic');
let loginBtn = document.querySelector('#loginBtn');


class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownShown: false,
      isSignedIn: false,
      imgsrc: ""
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount () {
    return firebase.auth().onAuthStateChanged(user => {
          this.setState({isSignedIn: !!user});
          console.log("user", user);
          this.setState({imgsrc: user.photoURL});
        }
    )
  };

  showMenu(e) {
    e.preventDefault();
    this.setState({
      dropdownShown: true
    },() => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e){
      this.setState({
        dropdownShown: false
      },() => {
        document.removeEventListener('click', this.closeMenu);
      });
  }

  startLogin () {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
      console.log(result.user.displayName);
      profilePic.src = result.user.photoURL;
      profilePic.classList.toggle('hide');
      loginBtn.classList.toggle('hide');
      this.state.isSignedIn = true;
    }).catch(function(error) {
      let errorMessage = error.message;
      console.log(errorMessage);
    });
  };

startLogout () {
    return firebase.auth().signOut().then(function () {
      profilePic.src = img;
      profilePic.classList.toggle("hide");
      loginBtn.classList.toggle('hide');
      this.state.isSignedIn = false;
    }).catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/home">
            <span className="logo-left">Doc</span>
            <span className="logo-right">Station</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active ">
                <NavLink className="nav-link" to="/">
                <FontAwesomeIcon icon={faUserMd} className="icon"/>&nbsp;&nbsp;Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/termine">
                <FontAwesomeIcon icon={faCalendar} className="icon"/>&nbsp;&nbsp;Termine
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                <FontAwesomeIcon icon={faCog} className="icon"/>&nbsp;&nbsp;Einstellungen
                </NavLink>
              </li>
            </ul>
            <div>
              {this.state.isSignedIn ? (<div>Signed in as {firebase.auth().currentUser.displayName}</div>
              ) : (
                  <div>Please log in</div>
              )}
            </div>
            <ul className="navbar-nav ml-auto">
              {this.state.isSignedIn ? (<li id="userAccount" className="nav-item">
                    <button className="dropdownBtn" onClick={this.showMenu}>
                      <img
                          id="profilePic"
                          src={this.state.imgsrc}
                          className="rounded-circle"
                          alt="profile"
                          width="40"
                          height="40"
                      />
                    </button>
              </li>
              ) : null}
              <li className="nav-item">
                {this.state.isSignedIn ? null : (<button id="loginBtn" className="nav-link no-style" onClick={this.startLogin}><FontAwesomeIcon icon={faSignInAlt} className="icon"/>&nbsp;&nbsp;Login</button>)}
              </li>
            </ul>
          </div>
        </nav>
        {this.state.dropdownShown ? (
          <ul className="nav flex-column dropdown" ref={(e)=>{
            this.dropdownMenu = e;}}>
          <li className="nav-item">
          <NavLink className="nav-link active dropDownBtn no-style" to="/profil"><FontAwesomeIcon icon={faUser} className="icon"/>&nbsp;&nbsp;Profil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link dropDownBtn no-style" to="/settings"><FontAwesomeIcon icon={faCog} className="icon"/>&nbsp;&nbsp;Einstellungen</NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link dropDownBtn no-style" onClick={this.startLogout}><FontAwesomeIcon icon={faSignOutAlt} className="icon"/>&nbsp;&nbsp;Logout</button>
          </li>
        </ul>
        ) : null}
      </div>
    );
  }
}

export default NavBar;
