import React, { Component } from 'react'; 
import './HomePage.css'; 
import { setSelection } from '../actions/index.js'; 
import { connect } from 'react-redux'; 



export class HomePage extends Component {
  constructor({user, handleSelection, selection}) {
    super()
    this.state = {
      messageSelected: false
    }
  }

  updateSelection = (selection) => {
    this.props.handleSelection(selection)
  }

  render() {
    const {user, selection} = this.props
    return (

      <main className="home-page">
          <nav role="navigation">
            <ul>
              <li selection="add-contact" onClick={() => this.updateSelection(selection)}>Add Contact</li>
              <li selection="all-contacts" onClick={() => this.updateSelection(selection)} >All Contacts</li>
              <li selection="home" onClick={() => this.updateSelection(selection)}>Home</li>
              <li selection="sign-out" onClick={() => this.updateSelection(selection)} >Sign Out</li>
            </ul>
        </nav>
        <article className="message-container">
          <h2 className="reachout-message-intro">Hello,</h2>
          <h2 className="reachout-message-content">Have You Called Mom Today?</h2>
        </article>
        <article className="message-buttons-container">
          <button className="done-button">Done</button>
          <button className="reminder-button">Remind Me Tomorrow</button>
        </article>
      </main>    
      )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
  selection: state.selection
})

export const mapDispatchToProps = (dispatch) => ({
  handleSelection: (selection) => dispatch(setSelection(selection))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

