import React, { Component } from 'react';
import './App.css';
import CurrentView from '../CurrentView/CurrentView'; 
import { FormContainer } from '../FormContainer/FormContainer';
import HomePage from '../HomePage/HomePage.js';
import { connect } from 'react-redux';

export class App extends Component {
  constructor(){
    super()
  }

 componentToRender = (forms) => {
  if (!this.props.token) {
    return (
      <div className="app">
      <header>
        <h1>inTouch.</h1>
      </header>
      <FormContainer />
    </div>
    )
  } 
  if (this.props.token && this.props.selection) {
    return (        
      <div className="app">
      <header>
        <h1>inTouch.</h1>
      </header>
      <CurrentView />
    </div>
    
    )
  } else {
    return (
      <div className="app">
      <header>
        <h1>inTouch.</h1>
      </header>
        <HomePage />
      </div>
      )
  }
   
 }

  render() {
    let render = this.componentToRender()
    return (
        render 
    );
  }
}

export const mapStateToProps = (state) => ({
  token: state.user.token,
  selection: state.selection
})

export default connect (mapStateToProps)(App)