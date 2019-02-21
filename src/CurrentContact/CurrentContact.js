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
      <article> 
        <div className="current-contact-card">
          <header>
            <div className="contact-name">Rajaa B</div>
            <div role="container for icons edit and close" className="contact-icons-container">
              <p className="edit-icon">Edit</p>
              <p className="close-icon">Close</p>
            </div>
          </header>
          <main>
            <div className="contact-details-container">
              <div className="contact-details-label">Contact Details</div>
              <div className="contact-details">
                <div class="contact-email">
                  <div className="email-label">Email - </div>
                  <div className="email-information">yaboy@ymail.com</div>
                </div>
                <div class="frequency">
                  <div className="frequency-label">Frequency - </div>
                  <div className="frequency-information"> Monthly</div>
                </div>
                <div class="priority">
                  <div className="priority-label">Priority - </div>
                  <div className="frequency-information">Monthly</div>
                </div>
              </div>
            </div>
            <div className="notes-and-occasions-container">
              <div className="notes-container">
                <div className="notes-label">Notes</div>
                <p className="contact-note">loves sushi den take them there sometime</p>
              </div>
              <div classNames="saved-occasions-container">
                <div class="occasions-label">Occasions</div>
                <p className="saved-occasion">Birthday - 04/27 </p>
              </div>
            </div>
          </main>
        </div>
      </article>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  getSingleContact: () => dispatch(getCurrentContact())
})

export default connect(null, mapDispatchToProps)(CurrentContact)