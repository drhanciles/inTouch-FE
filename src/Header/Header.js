import React, { Component } from 'react'; 
import  { connect } from 'react-redux'; 
import { setSelection } from '../actions/index.js'; 
import { signOutUser } from '../actions/index.js'
import './Header.css'; 

export class Header extends Component {
  constructor() {
    super()
  }

  updateSelection = (selection) => {
    this.props.handleSelection(selection)
  }


  render() {
    const notLoggedIn = (
                      <header>
                        <h1>inTouch.</h1>
                      </header> 
                        )
    const loggedIn =  (
                      <header>
                        <h1>inTouch.</h1>
                        <nav role="navigation">
                            <ul>
                              <li onClick={() => this.updateSelection('add-contact')}>Add Contact</li>
                              <li onClick={() => this.updateSelection('all-contacts')} >All Contacts</li>
                              <li onClick={() => this.updateSelection('edit-contact')} >Edit Contact</li>
                              <li onClick={() => this.updateSelection('home')}>Home</li>
                              <li onClick={() => this.props.logOut()}>Sign Out</li>
                            </ul>
                        </nav>
                      </header> 
                      )

    const headerToRender = this.props.user.token ? loggedIn : notLoggedIn

    return (
      headerToRender
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  handleSelection: (selection) => dispatch(setSelection(selection)), 
  logOut: () => dispatch(signOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

