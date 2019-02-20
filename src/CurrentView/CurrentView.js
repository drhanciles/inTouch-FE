import React from 'react'; 
import CreateContact from '../CreateContact/CreateContact'
import { FormContainer } from '../FormContainer/FormContainer'
import { connect } from 'react-redux'

export const CurrentView = (props) => {

  let renderedContent = props.token ? <CreateContact /> : <FormContainer />
  return (
    <main>
      {renderedContent}
    </main>
  )
}

export const mapStateToProps = (state) => ({
  token: state.user.token,
  selection: state.selection
})

export default connect(mapStateToProps)(CurrentView)