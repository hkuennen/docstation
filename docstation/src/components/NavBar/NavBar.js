import React from "react";
import img from "../../assets/profilepicture.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import "./NavBar.css";

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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/home">
            <span className="logo-left">Doc</span>
            <span className="logo-right">Station</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active ">
                <a class="nav-link" href="www.google.de">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/termine">
                  Termine
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/termine">
                  Einstellungen
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li class="nav-item">
                <button className="dropdownBtn" onClick={this.showMenu}>
                  <img
                    src={img}
                    class="rounded-circle"
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
          <ul class="nav flex-column dropdown" ref={(e)=>{
            this.dropdownMenu = e;}}>
          <li class="nav-item">
          <a class="nav-link active" href="/"><FontAwesomeIcon icon={faUser} className="icon"/>&nbsp;&nbsp;Profil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/"><FontAwesomeIcon icon={faCog} className="icon"/>&nbsp;&nbsp;Einstellungen</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/"><FontAwesomeIcon icon={faSignOutAlt} className="icon"/>&nbsp;&nbsp;Logout</a>
          </li>
        </ul>
        ) : null}
      </div>
    );
  }
}

export default NavBar;
