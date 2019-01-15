import React, { Component } from 'react';
import Calendar  from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './App.css';

const localizer = Calendar.momentLocalizer(moment);

class App extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Erster Termin"
      }
    ]
  };
  
  render() {
    return (
      <div className="App">
      <Calendar
      localizer={localizer}
      defaultDate={new Date()}
      defaultView="month"
      events={this.state.events}
      style={{ height: "50vh", width: "50vw"}}
    />
      </div>
    );
  }
}

export default App;
