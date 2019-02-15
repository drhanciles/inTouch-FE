import React, {Component} from 'react'; 
import './CreateUser.css'

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
        <fieldset>
          <input className="create-user-input" name="name" value={name} type="text" required placeholder="Name"/>
          <input className="create-user-input" name="email" value={email} type="text" required placeholder="Email"/>
          <input className="create-user-input" name="password" value={password} type="password" required placeholder="Password"/>
          <input className="create-user-input" name="confirmation" value={confirmation} type="password" required placeholder="Confirmation"/>
        </fieldset>
        <button className="create-account-button">Create Account</button>
      </form>
    )
  }
}