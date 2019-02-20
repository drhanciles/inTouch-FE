import React, { Component }  from 'react'
import SignInUser from '../SignInUser/SignInUser'
import CreateUser from '../CreateUser/CreateUser'

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
      newUserSelected: true
    })
  }


  
  render() {
    let exhistingUser = <main className="form-container">
                          <SignInUser />
                          <p onClick={ this.toggleForm }className="user-type-selection">New User?</p> 
                        </main>
    let newUserForm =  <main className="form-container">
                          <CreateUser />
                        </main>                
    let formToRender = this.state.newUserSelected ? newUserForm : exhistingUser

      return (
         formToRender 
      )
    }
  }