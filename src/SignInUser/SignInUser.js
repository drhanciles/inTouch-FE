import React, { Component } from 'react'; 
import './signInUser.css'
// import { createUser } from '../Thunks/createUser.js'
// import  authenticateUser  from '../Thunks/authenticateUser.js'
// import { isLoading, hasErrored, signInUser } from '../actions/index.js'
// import { connect } from 'react-redux'

export class SignInUser extends Component {
  constructor() {
    super()
    this.state = {
      userName: '', 
      password: '',
      disabled: true
    }
  }
  
  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({
  //     [name]: value
  //   }, () => this.enableButton())
  // }
  
  // enableButton = () => {
  //   const { userName, email, password, confirmation } = this.state
  //   if (userName !== '' && email !== '' && password  !== '' && confirmation  !== '') {
  //     this.setState({
  //       disabled: false
  //     })
  //   }
  // }
  
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { userName, password } = this.state
  //   if (password === confirmation) {
  //     this.props.createNewUser(userName, email, password)
  //   } else {
  //     return (
  //       <div>
  //         <h3>Passwords do not match. Please try again.</h3>
  //       </div>
  //     )
  //   }
  //   this.setState({
  //     userName: '', 
  //     password: '',
  //     disabled: true
  //   })
  // }
  
  render() {
    const { userName, password, disabled } = this.state
    return (
      <form onSubmit={ this.handleSubmit }>
          <input onChange={ this.handleChange } className="user-name" name="userName" value={userName} type="text" required placeholder="Username"/>
          <input onChange={ this.handleChange } className="user-password" name="password" value={password} type="password" required placeholder="Password"/>
        <button className="sign-in-button" disabled={disabled}>SignIn Account</button>
      </form>
    )
  }
}

// export const mapDispatchToProps = (dispatch) => ({
//   createNewUser: (userName, email, password) => dispatch(createUser(userName, email, password))
// })
// 
// export default connect(null, mapDispatchToProps)(SignInUser)