import React, { Component }  from 'react'
import SignInUser from '../SignInUser/SignInUser'
import CreateUser from '../CreateUser/CreateUser'
import './FormContainer.css'

export class FormContainer extends Component {
  constructor() {
    super()
    this.state = {
      newUserSelected: false
    }
  }

  toggleForm = (e) => {
    e.preventDefault()
    this.setState({
      newUserSelected: !this.state.newUserSelected
    })
  }

  render() {
    let exhistingUser = <main className="form-container">
                          <SignInUser />
                          <p onClick={ this.toggleForm }className="user-type-selection">New User?</p> 
                        </main>
    let newUserForm =  <main className="form-container">
                          <CreateUser />
                          <p onClick={ this.toggleForm }className="user-type-selection">Back To Sign In</p> 
                        </main>                
    let formToRender = this.state.newUserSelected ? newUserForm : exhistingUser

      return (
         formToRender 
      )
    }
  }