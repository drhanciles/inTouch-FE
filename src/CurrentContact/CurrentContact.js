import React, { Component } from 'react'; 
import './CurrentContact.css'; 
import { getCurrentContact } from '../Thunks/getCurrentContact.js'
import { isLoading, hasErrored } from '../actions/index.js'
import { connect } from 'react-redux'

export class CurrentContact extends Component {
  constructor() {
    super()
    this.state = {
      disabled: true, 
      priority: '', 
      contactInformation: '', 
      frequency: ''
    }
  }

  componentDidMount() {
    this.props.getSingleContact()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  toggleDisabled = (e) => {
    e.preventDefault()
    this.setState({
      disabled: !this.state.disabled
    })
  }
  
  render() {
    const { disabled, priority, contactInformation, frequency } = this.state
    return (
      <article> 
        <div className="current-contact-card">
          <header className="contact-header">
            <div className="contact-name">Rajaa B</div>
            <div role="container for icons edit and close" className="contact-icons-container">
              <p onClick={this.toggleDisabled} className="edit-icon">Edit</p>
              <p className="close-icon">Close</p>
            </div>
          </header>
          <main>
            <div className="contact-details-container">
              <div className="contact-details-label">Contact Details</div>
              <div className="contact-details">
                <div className="contact-email">
                  <label className="email-label">Email: </label>
                  <input onChange={ this.handleChange } className="email-information contact-edit-input" disabled={disabled} type="text" name="contactInformation" placeholder="yaboy@ymail.com" value={ contactInformation }/>
                </div>
                <div className="contact-frequency">
                  <label className="frequency-label">Frequency: </label>
                  <input onChange={ this.handleChange } className="frequency-information contact-edit-input" disabled={disabled} type="number" name="frequency"  value={frequency} placeholder="3 Days"/>
                </div>
                <div className="contact-priority">
                  <div className="priority-label">Priority: </div>
                  <div className="priority-information">Monthly</div>
                  <select className="priority-selection" value={priority} name="priority" disabled={disabled} required onChange={ this.handleChange }> 
                        <option value={1}>1 - least important</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5 - most important</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="notes-and-occasions-container">
              <div className="notes-container">
                <div className="notes-label">Notes</div>
                <p className="contact-note">loves sushi den take them there sometime</p>
              </div>
              <div className="saved-occasions-container">
                <div className="occasions-label">Occasions</div>
                <p className="saved-occasion">Birthday - 04/27 </p>
              </div>
            </div>
          </main>
        </div>
      </article>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  getSingleContact: () => dispatch(getCurrentContact())
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentContact)