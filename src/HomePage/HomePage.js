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
      <main>
        <header>
          <h1>inTouch.</h1>
          <article className="menu-container">
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
        </header>
        <article className="message-container">
          <h2 className="reachout-message-intro">Hello Ye,</h2>
          <h2 className="reachout-message-content">Have You Called Mom Today?</h2>
        </article>
        <article className="message-buttons-container">
          <button className="done-button">Done</button>
          <button className="reminder-button">Remind Me Tomorrow</button>
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