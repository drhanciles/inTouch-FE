import React, { Component } from 'react'; 
import './AllContacts.css'; 
import { getContacts } from '../Thunks/getContacts.js'
import { isLoading, hasErrored, getAllContacts } from '../actions/index.js'
import { connect } from 'react-redux'

export class AllContacts extends Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
    this.props.getContactsList()
  }
  
  render() {
    let allContacts = [{name: 'Derek Hanciles', lastContacted: '2019-01-17'}, {name: 'Rajaa Boulassouak', lastContacted: '2019-01-18'}, {name: 'William Fischer', lastContacted: '2019-01-19'}, {name: 'Ryan McNeil', lastContacted: '2019-01-19'}]
    let renderedContacts = allContacts.map(contact => {
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

export const mapDispatchToProps = (dispatch) => ({
  getContactsList: () => dispatch(getContacts())
})

export default connect(null, mapDispatchToProps)(AllContacts)