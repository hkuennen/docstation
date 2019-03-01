import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "react-responsive-modal";
import DecisionDialog from '../DisionDialoge';

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
    if(this.props.title  !== "" ){
      const newEvent = {
        start: this.props.event[0],
        end: this.props.event[1],
        title: this.props.title
      }
      if(JSON.stringify(newEvent) === JSON.stringify(this.state.events[this.state.events.length -1])){
        console.log("doppelt");
      } else {
       this.state.events.push(newEvent);
      }
    } 
  }

  onOpenModal = () => {
    this.setState({ open: true,
      isUpdated: false
     });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };


  onSelectEvent() {
    this.onOpenModal();
  }

  deleteEvent = pEvent => {
    this.setState((prevState, props) => {
      const events = [...prevState.events]
      const idx = events.indexOf(pEvent)
      events.splice(idx, 1);
      return { events };
    });
    this.onCloseModal();
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
          onSelectEvent = {event => this.onSelectEvent(event)}
        />
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
        <DecisionDialog
          onCloseModal={this.onCloseModal}
          pushDate={this.pushDate}
          title="Möchten Sie Ihren Termin wirklich löschen?"
          deleteEvent={this.deleteEvent}
        />
      </Modal>
      </div>
    );
  }
}

export default DocsCalendar;
