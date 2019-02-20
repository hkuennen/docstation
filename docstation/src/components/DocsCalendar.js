import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class DocsCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment()),
        title: "Sprint Planning"
      }
    ]
  };

  componentDidUpdate(){
    //Wenn der Title string leer ist, wird kein neues Event erstellt. 
    if(this.props.title !== ""){
      this.state.events.push({
        start: this.props.event[0],
        end: this.props.event[1],
        title: this.props.title
      })
    } 
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "50vh", width: "50vw" }}
          className="calendar"
        />
      </div>
    );
  }
}

export default DocsCalendar;
