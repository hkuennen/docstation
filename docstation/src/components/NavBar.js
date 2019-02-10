import React from "react";
import img from '../assets/profilepicture.jpg';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/home">
        DocStation
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
          <li class="nav-item active">
            <a class="nav-link" href="www.google.de">
              Home <span class="sr-only">(current)</span>
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
          <img src={img} class="rounded-circle" alt="profile" width="30" height="30"/>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
