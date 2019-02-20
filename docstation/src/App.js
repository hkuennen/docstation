import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import DocsCalendar from "./components/DocsCalendar";
import ModalContent from "./components/ModalContent";
import Post from "./components/Post/Post";
import Modal from "react-responsive-modal";
import Termine from './components/Termine/Termine';
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
    title: ""
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

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card card-events">
              <h3 className="events-title">Ihre nächsten Termine</h3>
                <Termine
                name="Al Albert"
                termin="Allgemeine Untersuchung"
                />
                <Termine
                name="Pav Pavlow"
                termin="Darmspieglung"
                />
                <Termine
                name="Satoshi Nakamoto"
                termin="Allgemeine Untersuchung"
                />
              </div>
            </div>
            <div className="col calendar-container">
              <p className="logo-sm">
                <span className="logo-sm-left">Doc</span>
                <span className="logo-sm-right">Station</span>
              </p>
              <h3 className="calendar-title">Termin Kalendar</h3>
              <DocsCalendar
                event={this.state.termine}
                title={this.state.title}
              />
              <button
                type="button"
                class="btn btn-outline-primary mt-4"
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
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" href="/">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="/">
                      Mehr
                    </a>
                  </li>
                </ul>
              </nav>
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
