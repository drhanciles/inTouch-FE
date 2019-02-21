import React, { Component } from 'react'; 
import './HomePage.css'; 


export class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      messageSelected: false
    }
  }

  render() {
    const arrowIcon = './icons/down-arrow.svg'
    const addContactIcon = './icons/add-contact.svg'
    const allContactsIcon = './icons/all-contacts.svg'
    const logoutIcon = './icons/logout-gear.svg'
    const homeIcon = './icons/home.svg'
    return (

      <div className="home-page">
        <div className='menu-bar'>
          <nav role="navigation">
            <ul>
              <li>Add Contact</li>
              <li>All Contacts</li>
              <li>Home</li>
              <li>Sign Out</li>
            </ul>
          </nav>
        </div>
        <div className="message-container">
          <div className="reachout-message-intro">Hello Rajaa,</div>
          <div className="reachout-message-content">Have You Called Mom Today?</div>
        </div>
        <div className="buttons-container">
          <button className="done-button">Done</button>
          <button className="reminder-button">Remind Me Tomorrow</button>
        </div>
        <div className="occasions-label">Upcoming Occasions:</div>
        <div className="occasions-container"> 
          <div className="occasion">
            <div className="date-container">01/03/19</div>
            <div className="occasaion-reminder-content">Celebrate Graduation with family dinner</div>
          </div>
          <div className="occasion">
            <div className="date-container">18/04/19</div>
            <div className="occasaion-reminder-content"> Mom's Birthday</div>
          </div>
          <div className="occasion">
            <div className="date-container">05/12/19</div>
            <div className="occasaion-content">Mother's Day dinner at Mama Mia</div>
          </div>
        </div>
      </div>
    )
  }
}