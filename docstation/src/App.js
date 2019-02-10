import React, { Component } from "react";
import NavBar from "./components/NavBar";
import DocsCalendar from "./components/DocsCalendar";
import ModalContent from './components/ModalContent';
import Modal from "react-responsive-modal";
import "./App.css";

class App extends Component {
  state = {
    open: false,
    termine: {},
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

 

  render() {
    return (
      <div className="App">
        <NavBar />
        <DocsCalendar />
        <button type="button" class="btn btn-outline-primary mt-4" onClick={this.onOpenModal}>
          Termin hinzufügen
        </button>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <ModalContent 
            onCloseModal={this.onCloseModal}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
