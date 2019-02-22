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
  switch(selection) {
    case 'home': 
      return <HomePage />
    case 'add-conact': 
      return <CreateContact />
    case 'all-contacts': 
      return <AllContacts />
    case 'sign-out':
      return <FormContainer />
    default: 
      return new Error('Unknow selection:' + selection)
  }

}

render() {
    let renderedContent = this.updateView(this.props.selection)
    return (
      <main>
        { renderedContent }
      </main>
    )
  }

  
}

export const mapStateToProps = (state) => ({
  token: state.user.token,
  selection: state.selection
})

export default connect(mapStateToProps)(CurrentView)