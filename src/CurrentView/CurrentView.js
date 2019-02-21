import React from 'react'; 
import CreateContact from '../CreateContact/CreateContact'
import CurrentContact from '../CurrentContact/CurrentContact'
import { FormContainer } from '../FormContainer/FormContainer'
import HomePage from '../HomePage/HomePage.js'
import { connect } from 'react-redux'

export const CurrentView = (props) => {

  let renderedContent = props.token ? <CurrentContact /> : <FormContainer />
  return (
    <main>
      { renderedContent }
    </main>
  )
}

export const mapStateToProps = (state) => ({
  token: state.user.token,
  selection: state.selection
})

export default connect(mapStateToProps)(CurrentView)