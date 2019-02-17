import React, { Component } from 'react';
import './App.css';
import CreateUser from '../CreateUser/CreateUser.js'
import CreateContact from '../CreateContact/CreateContact.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>inTouch.</h1>
        </header>
          <CreateContact />
      </div>
    );
  }
}

export default App;
