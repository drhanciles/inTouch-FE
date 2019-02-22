import React, { Component } from 'react'; 
import './HomePage.css'; 
import { connect } from 'react-redux'; 

export class HomePage extends Component {
  constructor({user, handleSelection, selection}) {
    super()
    this.state = {
      messageSelected: false
    }
  }


  render() {
    const { user } = this.props
    return (

      <main className="home-page">
        <article className="message-container">
          <h2 className="reachout-message-intro">Hello,</h2>
          <h2 className="reachout-message-content">Have You Called Mom Today?</h2>
        </article>
        <article className="message-buttons-container">
          <button className="done-button">Done</button>
          <button className="reminder-button">Remind Me Tomorrow</button>
        </article>
      </main>    
      )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(HomePage)

