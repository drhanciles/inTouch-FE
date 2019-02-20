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

// export const mapStateToProps = (state) => ({
//   token: (userName, password) => dispatch(authenticateUser(userName, password))
// })

export const mapDispatchToProps = (dispatch) => ({
  getContactsList: () => dispatch(getContacts())
})

export default connect(null, mapDispatchToProps)(AllContacts)