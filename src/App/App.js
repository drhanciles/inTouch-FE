import React, { Component } from 'react';
import './App.css';
import CreateUser from '../CreateUser/CreateUser.js'
import CreateContact from '../CreateContact/CreateContact.js';
import HomePage from '../HomePage/HomePage.js'; 

class App extends Component {
  render() {
    return (
      <div className="app">

        <header>
          <h1>inTouch.</h1>
        </header>
          <CreateContact />
      {/* <header>
        <h1>inTouch.</h1>
      </header>
        <CreateUser /> */}
      <HomePage />
      </div>
    );
  }
}

export default App;
