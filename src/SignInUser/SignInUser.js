import React, { Component } from 'react'; 
import './SignInUser.css'

export default class SignInUser extends Component {
  constructor() {
    super()
    this.state = {
      userName: '', 
      password: '',
      disabled: true
    }
  }
  
  render() {
    const { userName, password, disabled } = this.state
    return (
      <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleChange } className="user-name" name="userName" value={userName} type="text" required placeholder="Username"/>
          <input onChange={ this.handleChange } className="user-password" name="password" value={password} type="password" required placeholder="Password"/>
        <button className="sign-in-button" disabled={disabled}>Sign In</button>
      </form>
    )
  }
}