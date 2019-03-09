import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Img from './assets/profilepicture.jpg';

class Profil extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row" />
          <div className="col">
          <div className="card card-profil">
            <div className="container">
              <div className="row">
                <div class="col-sm">
                    <img src={Img} alt="profil-picture" className="profile-img"/>
                </div>
                <div class="col-sm">
                    <input
                      type="text"
                      className="input-profil ml-3"
                      placeholder="Vorname"
                    />
                    <input
                      type="text"
                      className="input-profil ml-3"
                      placeholder="Nachname"
                    />
                    <input
                      type="text"
                      className="input-profil ml-3"
                      placeholder="Straße"
                    />
                    <input
                      type="text"
                      className="input-profil ml-3"
                      placeholder="Hausnummer"
                    />
                    <input
                      type="text"
                      className="input-profil ml-3"
                      placeholder="Ort"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profil;
