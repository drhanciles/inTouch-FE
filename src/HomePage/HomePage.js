import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import { getContacts } from '../Thunks/getContacts.js';
import { suggestedContacts } from '../Thunks/suggestedContacts.js';

export class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      doneButtonClicked: false,
      reminderButtonClicked: false
    }
  }

  componentDidMount() {
    const { getAllContacts, getSuggestedContacts, token } = this.props
    getAllContacts(token)
    suggestedContacts(token)
  }

  completedReachOut = () => {
    const { user } = this.props
    this.setState({
      doneButtonClicked: true
    })
  }

  remindUserTomorrow = () => {
    const { user } = this.props
    this.setState({
      reminderButtonClicked: true
    })
  }

  render() {
    const { user } = this.props
    const { doneButtonClicked, reminderButtonClicked } = this.state
    let content
    const noButtonsSelected = (
                              <article>
                                <article className="message-container">
                                  <h2 className="reachout-message-intro">Hello {user.name},</h2>
                                  <h2 className="reachout-message-content">Have You Called Mom Today?</h2>
                                </article>
                                <div className="buttons-container">
                                  <button onClick={ () => this.completedReachOut() } className="done-button">Done</button>
                                  <button onClick={ () => this.remindUserTomorrow() } className="reminder-button">Remind Me Tomorrow</button>
                                </div>
                              </article>
                            )
    const doneSelected = (
                            <article className="message-container">
                              <h2 className="reachout-message-content">{user.name} you are all caught up, come back tomorrow for your next contact to stay in touch with!</h2>
                            </article>
                          )
    const reminderSelected = (
                              <article className="message-container">
                                <h2 className="reachout-message-content">{user.name} no worries come back tomorrow when you have time.</h2>
                              </article>
                             )

    if (doneButtonClicked) {
      content = doneSelected
    } else if (reminderButtonClicked) {
      content = reminderSelected
    } else {
      content = noButtonsSelected
    }

    return (
      <main className="home-page">
        {content}
        <div className="occasions-label">Upcoming Occasions:</div>
        <div className="occasions-container">
          <div className="occasion">
            <div className="date-container">01/03/19</div>
            <div className="occasaion-reminder-content">Celebrate Graduation with family dinner</div>
          </div>
          <div className="occasion">
            <div className="date-container">18/04/19</div>
            <div className="occasaion-reminder-content"> Moms Birthday</div>
          </div>
          <div className="occasion">
            <div className="date-container">05/12/19</div>
            <div className="occasaion-content">Mothers Day dinner at Mama Mia</div>
          </div>
        </div>
      </main>
  )
  }
}


export const mapStateToProps = (state) => ({
  user: state.user,
  token: state.user.token
})

export const mapDispatachToProps = (dispatch) => ({
  getAllContacts: (token) => (dispatch(getContacts(token))),
  getSuggestedContacts: (token) => (dispatch(suggestedContacts(token)))
})

export default connect(mapStateToProps, mapDispatachToProps)(HomePage)
