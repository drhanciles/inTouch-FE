import React, { Component } from 'react'; 
import './AllContacts.css'; 

export default class AllContacts extends Component {
  constructor() {
    super()
  }
  
  render() {
    let allContacts = [{name: 'Derek', lastContacted: '2019-01-17'}, {name: 'Rajaa', lastContacted: '2019-01-18'}, {name: 'Will', lastContacted: '2019-01-19'}]
    let renderedContacts = allContacts.map(contact => {
      return (
        <div className="contact"> 
          <p className="contact-name">{contact.name}</p>
          <p className="last-contacted">Last Contacted: {contact.lastContacted}</p>
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