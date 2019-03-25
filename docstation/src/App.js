import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import DocsCalendar from "./components/DocsCalendar";
import ModalContent from "./components/ModalContent";
import Post from "./components/Post/Post";
import Modal from "react-responsive-modal";
import Termine from "./components/Termine/Termine";
import {firebase, GoogleAuthProvider} from './firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.pushDate = this.pushDate.bind(this);
  }

  state = {
    open: false,
    termine: {},
    title: "",
    name:"",
    isSignedIn: true,
    list: []
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  pushDate = (dates, title) => {
    this.onCloseModal();
    this.setState({
      termine: dates,
      title: title
    });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        //retrieve the logged in users dates
        var ref = firebase.database().ref('users/'+ user.uid + "/termine");
        ref.child("users").child("/termine").orderByChild("start");
        ref.on("child_added", snap => {
          var eintragId = snap.ref.path.pieces_[3];
          var title = snap.child("title").val();
          var name = snap.child("name").val();
          var start = snap.child("/date/start").val()
          var termin = {
            id: eintragId,
            name: name,
            title: title,
            start: start,
          }
          ref.child("users").child(user.uid).orderByChild("/termine/date/start");
          this.setState({
            list: this.state.list.concat(termin).sort(function(a,b){
              return a.start > b.start;
            })
          });
          //console.log("ICH BIN DER NAME " + name + "UND ICH BIN DER TITEL" + title);      
          console.log(this.state.list);
        });
      }else{
        console.log('Termine konnten nicht abgerufen werden');
      }
    }
  )};

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card card-events">
                <h3 className="events-title">Ihre nächsten Termine</h3>
                <ul id="listeTermine">
                {
                  this.state.list.map(function(terminliste){
                    return [
                    <li key={terminliste.id}><Termine name={terminliste.name} termin={terminliste.title}></Termine> </li>,
                    <p></p>
                    ];
                  })}
                </ul>
              </div>
            </div>
            <div className="col calendar-container">
              <p className="logo-sm">
                <span className="logo-sm-left">Doc</span>
                <span className="logo-sm-right">Station</span>
              </p>
              <h3 className="calendar-title">Termin Kalender</h3>
              <DocsCalendar
                event={this.state.termine}
                title={this.state.title}
                isUpdated={this.state.isUpdated}
                wasUpdated={this.wasUpdated}
              />
              <button
                type="button"
                className="btn btn-outline-primary mt-4"
                onClick={this.onOpenModal}
              >
                <FontAwesomeIcon icon={faPlusCircle} />
                &nbsp;&nbsp;Termin hinzufügen
              </button>
            </div>
          </div>
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <ModalContent
            onCloseModal={this.onCloseModal}
            pushDate={this.pushDate}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
