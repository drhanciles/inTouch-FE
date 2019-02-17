import React, {Component} from 'react'; 
import './CreateContact.css'

export default class CreateContact extends Component {
  constructor() {
    super()
    this.state = {
     name: '',
     contactType: '',
     contactInformation: '',
     frequency: '',
     priority: '',
     notes: ''
    }
  }
  
  render() {
    const { name, contactType, contactInformation, frequency, priority, notes } = this.state
    return (
      <main>
        <div className="new-contact-header">New Contact</div>
        <div className="article">
          <div className="name">
            <input className="new-contact-name" name="name" value={name} type="text" required placeholder="Name"/>
          </div>
          <div className="selections">
            <select className="contact-type" value={contactType} required> 
              <option value="email">Email</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
            </select>
            <select className="priority" value={priority} required> 
              <option value="prio-1">1</option>
              <option value="prio-2">2</option>
              <option value="prio-3">3</option>
              <option value="prio-4">4</option>
              <option value="prio-5">5</option>
            </select>
            <select className="frequency" value={priority} required> 
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="contact-info">
            <input className="contact-information" name="contact-information" value={contactInformation} type="text" required placeholder="Phone Number"/>
          </div>
          <label className="notes">Notes:</label>
          <div className="notes">
            <text-area value={notes} rows="5" className="note-field" placeholder="Take your notes here."/>  
          </div>          
        </div>
        <div className="save-contact">
          <button className='save-contact-btn'>Save Contact</button>
        </div>
      </main>
    )
  }
}