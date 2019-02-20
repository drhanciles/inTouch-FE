import React, { Component } from 'react';
import './App.css';
import CreateContact from '../CreateContact/CreateContact.js'

export class App extends Component {
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

