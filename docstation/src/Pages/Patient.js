import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import DocsCalendar from "../components/DocsCalendar";
import Post from "../components/Post/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

class Patient extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col calendar-container">
              <p className="logo-sm">
                <span className="logo-sm-left">Doc</span>
                <span className="logo-sm-right">Station</span>
              </p>
              <h3 className="calendar-title">Termin Kalender</h3>
              <DocsCalendar />
              <button
                type="button"
                className="btn btn-outline-primary mt-4"
                onClick={this.onOpenModal}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
                &nbsp;&nbsp;Termin hinzufügen
              </button>
            </div>
            <div className="col">
              <Post
                title="Der Wasser-Tag"
                subtitle="Ersetzen Sie Softdrinks"
                text="Nutzen Sie die Kraft des Wasser und verzichten sie auf Softdrinks. Diese tun Ihrer Gesundheit..."
              />
              <Post
                title="Der Waschbrett-Tag"
                subtitle="Trainieren Sie die Bauchmuskeln"
                text="Machen Sie nach Ihrem 5-Minuten-Sportprogramm ein paar Käfer-Durchgänge, um die Entwicklung Ihres..."
              />
              <Post
                title="Der Bade-Tag"
                subtitle="Baden sorgt für Entspannung"
                text="Nehmen Sie heute ein entspannendes heisses Bad mit einem basischen Badesalz. Sie können dazu auch..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Patient;
