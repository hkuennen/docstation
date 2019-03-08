import React, { Component } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

class ModalContent extends Component {
  state = {
    date: [new Date(), new Date()]
  };

  titleRef = React.createRef();

  onChange = date => this.setState({ date });

  pushDate = e => {
    e.preventDefault();
    //Den aktuellen State kopoeren
    const dates = {...this.state.date};
    //Den Title des Events hinzufügen
    const title = this.titleRef.current.value;
    //Den State zum höheren Komponenten pushen
    this.props.pushDate(dates,title);
    console.log(dates);
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h3 className="title">Fügen Sie einen neuen Termin hinzu</h3>
          <p className="subtitle">
            Wählen sie ihren Termin und bestätigen Sie diesen mit speichern.
          </p>
        </div>
        <div className="row">
          <form>
          <input type="text" placeholder="Title des Termins" ref={this.titleRef}/>
          </form>
          <label></label>
        </div>
        <div className="row">
          <DateTimeRangePicker
            onChange={this.onChange}
            value={this.state.date}
            disableClock={true}
            className="calendar-self"
          />
        </div>
        <div className="row">
          <button type="button" className="btn btn-outline-primary mt-4" onClick={this.pushDate}>
           <FontAwesomeIcon icon={faSave}/>&nbsp;&nbsp;Speichern
          </button>
        </div>
      </div>
    );
  }
}

export default ModalContent;
