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
        <article>
          <form>
            <input className="new-contact-name" name="name" value={name} type="text" required placeholder="Name"/>
            <select className="contact-type" value={contactType} required> 
              <option value="email">Email</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
            </selct>
            <select className="priority" value={priority} required> 
              <option value="prio-1">1</option>
              <option value="prio-2">2</option>
              <option value="prio-3">3</option>
              <option value="prio-4">4</option>
              <option value="prio-5">5</option>
            </selct>
            <select className="frequency" value={priority} required> 
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="monthly">Monthly</option>
            </selct>
            <input className="contact-information" name="contact-information" value={contactInformation} type="text" required placeholder="Phone Number"/>
            <label for="notes">Notes:</label>
            <text-area value={notes} rows="5" name="notes" ></text-area>            
          </form>
        </article>
      </main>
    )
  }
}