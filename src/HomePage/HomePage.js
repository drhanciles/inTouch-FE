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
      <main>
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
          <div className="done-button">Done</div>
          <div className="reminder-button">Remind Me Tomorrow</div>
        </div>
        <div className="occasions-label">Upcoming Occasions:</div>
        <div className="occasions-container"> 
          <div className="occasion">-
            <div className="date-container">02/16/19</div>
            <div className="occasaion-reminder-content">Celebrate Gina's Birthday</div>
          </div>
          <div className="occasion">
            <div className="date-container">02/16/19</div>
            <div className="occasaion-reminder-content">Celebrate Gina's Birthday</div>
          </div>
          <div className="occasion">
            <div className="date-container">02/16/19</div>
            <div className="occasaion-reminder-content">Celebrate Gina's Birthday</div>
          </div>
        </div>
      </main>
    )
  }
}