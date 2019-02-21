import React, { Component } from 'react'; 
import './CurrentContact.css'; 
import { getCurrentContact } from '../Thunks/getCurrentContact.js'
import { isLoading, hasErrored } from '../actions/index.js'
import { connect } from 'react-redux'

export class CurrentContact extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getSingleContact()
  }
  
  render() {
    return (
      <article className="current-contact-card">
        <header>
          <h1>Contact Name</h1>
          <div role="container for contact buttons icons in the header of the contact card" className="contact-icons-container">
            <p>Edit</p>
            <p>Close</p>
          </div>
        </header>
        <main>
          <section className="contact-details-container">
            <h3>Contact Details</h3>
            <div role="container for contact information"className="contact-type-container">
              <h5 className="contact-label">Email - </h5>
              <h5 className="contact-information">yaboy@ymail.com</h5>
            </div>
            <div role="container for contact's frequency selection"className="frequency-container">
                <h5 className="frequency-label">Frequency - </h5>
                <h5 className="frequency-information"> Monthly</h5>
          </div>
          <div role="container for contact's priority selection"className="priority-container">
                <h5 className="priority-label">Priority - </h5>
                <h5 className="frequency-information">Monthly</h5>
          </div>
          <div role="container for the notes saved to the contact's" className="notes-container">
                <h5 className="priority-label">Notes</h5>
                <p className="contact-note">loves sushi den take them there sometime</p>
          </div>
          </section>
          <section classNames="saved-occasions-container">
            <h3>Occasions</h3>
            <p className="saved-occasion">Birthday - 04/27 </p>
          </section>
        </main>
      </article>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getSingleContact: () => dispatch(getCurrentContact())
})

export default connect(null, mapDispatchToProps)(CurrentContact)