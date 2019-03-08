import React from "react";
import img from "../../assets/profilepicture.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { firebase, googleAuthProvider } from "../../firebase";
import "./NavBar.css";
import Auth from '../../components/Auth';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownShown: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({
      dropdownShown: true
    },() => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(e){
    if(!this.dropdownMenu.contains(e.target)){
      this.setState({
        dropdownShown: false
      },() => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  startLogin () {
    return firebase.auth().signInWithPopup(googleAuthProvider).then(function (result) {
      console.log(result.user.displayName);
      let profilePic = document.querySelector('#profilePic');
      profilePic.src = result.user.photoURL;
    }).catch(function(error) {
      let errorMessage = error.message;
      console.log(errorMessage);
    });
  };

startLogout () {
    return firebase.auth().signOut().then(function () {
      let profilePic = document.querySelector('#profilePic');
      profilePic.src = img;
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
                <a className="nav-link" href="www.google.de">
                <FontAwesomeIcon icon={faUserMd} className="icon"/>&nbsp;&nbsp;Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/termine">
                <FontAwesomeIcon icon={faCalendar} className="icon"/>&nbsp;&nbsp;Termine
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/termine">
                <FontAwesomeIcon icon={faCog} className="icon"/>&nbsp;&nbsp;Einstellungen
                </a>
              </li>
            </ul>
            <Auth />
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="nav-link no-style" onClick={this.startLogin}><FontAwesomeIcon icon={faSignInAlt} className="icon"/>&nbsp;&nbsp;Login</button>
              </li>
              <li id="userAccount" className="nav-item">
                <button className="dropdownBtn" onClick={this.showMenu}>
                  <img
                      id="profilePic"
                    src={img}
                    className="rounded-circle"
                    alt="profile"
                    width="40"
                    height="40"
                  />
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {this.state.dropdownShown ? (
          <ul className="nav flex-column dropdown" ref={(e)=>{
            this.dropdownMenu = e;}}>
          <li className="nav-item">
          <a className="nav-link active dropDownBtn no-style"><FontAwesomeIcon icon={faUser} className="icon"/>&nbsp;&nbsp;Profil</a>
          </li>
          <li className="nav-item">
            <a className="nav-link dropDownBtn no-style"><FontAwesomeIcon icon={faCog} className="icon"/>&nbsp;&nbsp;Einstellungen</a>
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
