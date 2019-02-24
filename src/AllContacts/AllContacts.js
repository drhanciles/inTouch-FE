import React, { Component } from 'react'; 
import './AllContacts.css'; 
import { getContacts } from '../Thunks/getContacts.js'
import { isLoading, hasErrored, getAllContacts } from '../actions/index.js'
import { connect } from 'react-redux'

export class AllContacts extends Component {
  constructor(props) {
    super()
  }
  
  // componentDidMount() {
  //   this.props.getContactsList()
  // }
  
  render() {
    const { contacts } = this.props
    let renderedContacts = contacts.map(contact => {
      return (
        <div className="contact"> 
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
  contacts: state.contacts
})

export const mapDispatchToProps = (dispatch) => ({
  getContactsList: () => dispatch(getContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts)