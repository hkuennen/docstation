import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "./Auswahlseite.css";

class Auswahlseite extends Component {
  render() {
    return (
      <>
        <div className="parent">
          <div className="left">
            <h1 className="heading">Herzlich Willkommen bei DocStation.</h1>
          </div>
          <div className="right">
            <div className="box">
              <h3 className="heading--decision">
                Bitte wählen Sie eine der Möglichkeiten:
              </h3>
              <Link to="/home"><button className="btn--center"><FontAwesomeIcon icon={faUserMd} className="icon"/>&nbsp;&nbsp;Weiter als Praxis</button></Link>
              <hr className="hr"/>
              <Link to="/patient"> <button className="btn--center"><FontAwesomeIcon icon={faUser} className="icon"/>&nbsp;&nbsp;Weiter als Patient</button></Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Auswahlseite;
