import React, { Component } from 'react'; 
import './CreateUser.css'
import { createUser } from '../Thunks/createUser.js'
import { hasErrored } from '../Actions/index.js'
import { connect } from 'react-redux'

export default class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '', 
      email: '', 
      password: '',
      confirmation: ''
    }
  }
  render() {
    const { name, email, password, confirmation } = this.state
    return (
      <form>
          <input className="new-user-name" name="name" value={name} type="text" required placeholder="Name"/>
          <input className="new-user-email" name="email" value={email} type="text" required placeholder="Email"/>
          <input className="new-user-password" name="password" value={password} type="password" required placeholder="Password"/>
          <input className="new-user-password-confirmation" name="confirmation" value={confirmation} type="password" required placeholder="Confirmation"/>
        <button className="new-account-button">Create Account</button>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  createNewUser: (userName, email, password) => dispatch(createUser(userName, email, password))
})

export default connect(null, mapDispatchToProps)(CreateUser)
