import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

class DisionDialoge extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button
              type="button"
              class="btn btn-danger btn-outline-primary mt-4"
              onClick={this.props.deleteEvent}
            >
              <FontAwesomeIcon icon={faTrash} className="icon" />
              &nbsp;&nbsp;Termin Löschen
            </button>
            <button
              type="button"
              class="btn btn-outline-primary mt-4"
              onClick={this.props.onCloseModal}
            >
              <FontAwesomeIcon icon={faSave} className="icon" />
              &nbsp;&nbsp;Abbrechen
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DisionDialoge;
