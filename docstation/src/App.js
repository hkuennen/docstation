import React, { Component } from "react";
import NavBar from "./components/NavBar";
import DocsCalendar from "./components/DocsCalendar";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "./App.css";

const styles = {
  Button: {
    margin: '20px'
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <DocsCalendar />
        <Button variant="contained" color="primary" style={styles.Button}>
          Termin hinzufügen 
        </Button>
      </div>
    );
  }
}

export default App;
