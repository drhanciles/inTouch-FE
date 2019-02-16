import React, { Component } from 'react'; 
import './HomePage.css'; 


export class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      messageSelected: false, 
      settingsSelected: false
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1>inTouch.</h1>
          <article>
            <h3>Settings 
              <span className="arrow-icon-container"></span>
            </h3>
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