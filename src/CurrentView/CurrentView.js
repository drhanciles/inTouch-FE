import React, { Component } from 'react'; 
import CreateContact from '../CreateContact/CreateContact';
import CurrentContact from '../CurrentContact/CurrentContact';
import { FormContainer } from '../FormContainer/FormContainer';
import HomePage from '../HomePage/HomePage';
import AllContacts from '../AllContacts/AllContacts'; 
import { connect } from 'react-redux';

export class CurrentView extends Component {
  constructor(){
    super()
}

updateView = (selection) => {
  debugger; 
  switch(selection) {
    case 'home': 
      return (
        <main>
          <HomePage />
        </main>
      )
    case 'add-contact': 
      return (
        <main>
          <CreateContact />  
        </main>
      )
    case 'edit-contact': 
        return (
          <main>
            <CurrentContact />
          </main>
        )
    case 'all-contacts': 
      return (
        <main>
          <AllContacts />
        </main>
      )
    case 'sign-out':
      return (
        <main>
          <FormContainer />
        </main>
      )
    default: 
      return new Error('Unknown selection:' + selection)
  }
}

render() {
    let renderedContent = this.updateView(this.props.selection)
    return (
         renderedContent 
    )
  }

  
}

export const mapStateToProps = (state) => ({
  token: state.user.token,
  selection: state.selection
})

export default connect(mapStateToProps)(CurrentView)