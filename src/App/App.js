import React, { Component } from 'react';
import './App.css';
import CurrentView from '../CurrentView/CurrentView.js'
// import CreateUser from '../CreateUser/CreateUser.js'
// import SignInUser from '../SignInUser/SignInUser.js'
// import HomePage from '../HomePage/HomePage.js'
// import CreateContact from '../CreateContact/CreateContact.js'
// import CurrentContact from '../CurrentContact/CurrentContact.js'
// import AllContacts from '../AllContacts/AllContacts.js'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>inTouch.</h1>
        </header>
        <CurrentView />
      </div>
    );
  }
}