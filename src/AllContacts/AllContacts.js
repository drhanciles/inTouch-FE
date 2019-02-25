import React, { Component } from 'react';
import './AllContacts.css';
import { getContacts } from '../Thunks/getContacts.js'
import { getContact } from '../Thunks/getContact.js'
import { isLoading, hasErrored, getAllContacts, setSelection } from '../actions/index.js'
import { connect } from 'react-redux'

export class AllContacts extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    const { getContactsList, token } = this.props
    getContactsList(token)
  }

  handleSelection = (e, id) => {
    const token = this.props.token
    this.props.getCurrentContact(token, id)
    // console.log(a);
    this.props.handleSelection('edit-contact')
  }

  // TODO: Function to get single contact by ID
  // Get token
  // this.props.getCurrentContact(userName, password) [import thunk]
  // switch views

  render() {
    const { contacts } = this.props
    let renderedContacts = contacts.map(contact => {
      return (
        <div className="contact" onClick={(e) => {
     this.handleSelection(e, contact.id)}}>
          <div className="name-container">
            <div className="contact-name">{contact.name}</div>
          </div>
          <div className="last-contacted-container">
            <div className="last-contacted">Last Contacted: {contact.lastContacted}</div>
          </div>
        </div>
      )
    })
    return(
      <div className="all-contacts">
        <div className="all-contacts-header">Contacts</div>
        <div className="contacts-container">
          <div className="contacts"> {renderedContacts} </div>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  contacts: state.contacts,
  token: state.user.token
})

export const mapDispatchToProps = (dispatch) => ({
  getContactsList: (token) => dispatch(getContacts(token)),
  getCurrentContact: (token, id) => dispatch(getContact(token, id)),
  handleSelection: (selection) => dispatch(setSelection(selection))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts)
