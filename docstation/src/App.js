import React, { Component } from 'react';
import NavBar from './components/NavBar';
import DocsCalendar from './components/DocsCalendar';
import './App.css';
import './firebase.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <DocsCalendar/>
      </div>
    );
  }
}

export default App;
