import React, { Component } from 'react'; 
import  { connect } from 'react-redux'; 

export class Header extends Component {
  constructor() {
    super()
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
                              <li onClick={() => this.updateSelection('home')}>Home</li>
                              <li onClick={() => this.updateSelection('sign-out')}>Sign Out</li>
                            </ul>
                        </nav>
                      </header> 
                      )

    const headerToRender = this.props.user ? loggedIn : notLoggedIn

    return (
      headerToRender
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  handleSelection: (selection) => dispatch(setSelection(selection))
})

