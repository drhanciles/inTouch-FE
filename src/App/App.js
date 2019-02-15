import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CreateUser from '../CreateUser/CreateUser.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header><h1>inTouch</h1></header>
        <CreateUser />
      </div>
    );
  }
}

export default App;
