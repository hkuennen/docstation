import React, { Component } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";

class ModalContent extends Component {
  state = {
    date: [new Date(), new Date()]
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div class="container">
        <div class="row">
          <h3>Fügen Sie einen neuen Termin hinzu</h3>
          <p>
            Wählen sie ihren Termin und bestätigen Sie diesen mit speichern.
          </p>
        </div>
        <div className="row">
          <DateTimeRangePicker
            onChange={this.onChange}
            value={this.state.date}
            disableClock={true}
          />
        </div>
        <div className="row">
          <button type="button" class="btn btn-outline-primary mt-4" onClick={this.props.onCloseModal}>
            Speichern
          </button>
        </div>
      </div>
    );
  }
}

export default ModalContent;
