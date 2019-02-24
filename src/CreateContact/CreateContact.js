import React, { Component } from 'react'; 
import './CreateContact.css'
import { addContact } from '../Thunks/addContact.js'
import { isLoading, hasErrored } from '../actions/index.js'
import { connect } from 'react-redux'


export class CreateContact extends Component {
  constructor() {
    super()
    this.state = {
     name: '',
     priority: '',
     frequency: '',
     notes: '', 
     disabled: true
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    }, () => this.enableButton())
  }

  enableButton = () => {
    const { name, priority, frequency, notes } = this.state
    if (name !== '' && frequency !== '' && priority !== '' && notes !== '') {
      this.setState({
        disabled: false
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, priority, frequency, notes } = this.state
    this.props.newContact(name, priority, frequency, notes, this.props.token)
    alert(`${name} has been saved!`)
  }
  
  render() {
    const { name, priority, frequency, notes } = this.state
    return (
      <div className="create-contact-page">
        <form onSubmit={ this.handleSubmit }>
          <div className="new-contact-header">New Contact</div>
          <div className="article">
            <div className="name">
              <input onChange={ this.handleChange } className="new-contact-name" name="name" value={name} type="text" required placeholder="Name"/>
            </div>
            <div className="priority">
              <select className="priority-selection" value={priority} name="priority" required onChange={ this.handleChange }> 
                <option value={1}>1 - most important</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5 - least important</option>
              </select>
            </div>
            <div className="frequency"> 
              <p>Contact every</p>
              <input onChange={ this.handleChange } className="frequency-input" name="frequency" value={frequency} type="number" required  placeholder="7"/> 
              <p>days</p>
            </div>
            <label className="notes-label">Notes:</label>
            <div className="notes">
              <textarea onChange={ this.handleChange } value={notes} rows="5" name="notes" className="note-field" placeholder="Take your notes here."/>  
            </div>          
          </div>
          <div className="save-contact">
            <button className="save-contact-btn">Save Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  token: state.user.token, 
  error: state.errored, 
  loading: state.loading
})

export const mapDispatchToProps = (dispatch) => ({
  newContact: (name, priority, frequency, notes, token) => dispatch(addContact(name, priority, frequency, notes, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateContact)