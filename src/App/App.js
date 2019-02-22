import React, { Component } from 'react';
import './App.css';
import CurrentView from '../CurrentView/CurrentView'; 
import { FormContainer } from '../FormContainer/FormContainer';
import HomePage from '../HomePage/HomePage.js';

export class App extends Component {
  componentToRender = () => {
    if (!this.props.token) {
      return <FormContainer />
    } else if (this.props.token && this.props.selection === '') {
      return <HomePage />
    } else if (this.props.token && this.props.selection) {
      return <CurrentView />
    } 
  }

  render() {
    let renderedContent = this.componentToRender()
    return (
      <div className="app">
        <header>
          <h1>inTouch.</h1>
        </header>
        { renderedContent }
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  token: state.user.token,
  selection: state.selection
})