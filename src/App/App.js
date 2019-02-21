import React, { Component } from 'react';
import './App.css';
// import AllContacts from '../AllContacts/AllContacts.js'
// import CurrentView from '../CurrentView/CurrentView.js'
import CurrentContact from '../CurrentContact/CurrentContact.js'


export class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>inTouch.</h1>
        </header>
        <CurrentContact/>
      </div>
    );
  }
}

