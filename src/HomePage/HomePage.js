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
        <header>
          <h1>inTouch.</h1>
          <article>
            <h3>Settings 
              <span role="container for settings selection icon" className="arrow-icon-container">
                <i>{arrowIcon}</i>
              </span>
            </h3>
            <nav role="navigation">
              <ul>
                <li>Add Contact
                  <span className="icon"role="add contact icon container">{addContactIcon}</span>
                </li>
                <li>All Contacts
                <span className="icon"role="all contacts icon container">{allContactsIcon}</span>
                </li>
                <li>Home
                <span className="icon"role="home icon container">{homeIcon}</span>
                </li>
                <li>Sign Out
                <span className="icon"role="sign out icon container">{logoutIcon}</span>
                </li>
              </ul>
            </nav>
          </article>
        </header>
        <article className="message-container">
          <h2 className="reachout-message-intro">Hello Ye,</h2>
          <h2 className="reachout-message-content">Have You Called Mom Today?</h2>
        </article>
        <section className="occasions-container"> 
        <h3>Upcoming Occasions:</h3>
          <section className="occasions-week">
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
            <article className="occasion">
              <p className="date-container">02/16/19</p>
              <p className="occasaion-reminder-content">Celebrate Gina's Birthday</p>
            </article>
          </section>
        </section>
      </main>
    )
  }
}