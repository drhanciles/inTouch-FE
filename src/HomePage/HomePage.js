import React, { Component } from 'react'; 
import './HomePage.css'; 


export default class HomePage extends Component {
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
          <article className="dropdown-container">
            <h3>Menu 
              <span role="container for settings selection icon" className="icon-container">
                <i className="icon">{arrowIcon}</i>
              </span>
            </h3>
            <nav role="navigation">
              <ul>
                <li>Add Contact
                  <span className="icon-container"role="add contact icon container">
                    <i className="icon">{addContactIcon}</i>
                  </span>
                </li>
                <li>All Contacts
                <span className="icon-container"role="all contacts icon container">
                  <i className="icon">{allContactsIcon}</i>
                </span>
                </li>
                <li>Home
                <span className="icon-container"role="home icon container">
                  <i className="icon">{homeIcon}</i>
                </span>
                </li>
                <li>Sign Out
                <span className="icon-container"role="sign out icon container">
                  <i className="icon">{logoutIcon}</i>
                </span>
                </li>
              </ul>
            </nav>
          </article>
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