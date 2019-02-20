import React, { Component } from 'react';
import './App.css';
// import SignInUser from '../SignInUser/SignInUser.js'
// import CreateUser from '../CreateUser/CreateUser.js'
// import CreateContact from '../CreateContact/CreateContact.js'
import AllContacts from '../AllContacts/AllContacts.js'
//import SignInUser from '../SignInUser/SignInUser.js'
import { FormContainer } from '../FormContainer/FormContainer.js'


export class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>inTouch.</h1>
        </header>
        <FormContainer />
      </div>
    );
  }
}

