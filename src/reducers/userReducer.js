export const userReducer = (state={contacts: []}, action) => {
  switch (action.type) {
      case 'SIGN_IN_USER':
        return {
          name: action.userName, 
          token: action.token
        }
      case 'SIGN_OUT_USER': 
        return {}
      case 'CREATE_CONTACT': 
        return {
          contacts:[...state.contacts, {id: action.id, name: action.name}]
        }
      case 'UPDATE_CONTACT': 
        return state.contacts.map(contact => {
          if (contact.id !== action.id) {
            return contact
          }
          return Object.assign({}, contact, action.contact)
        })
        case 'UPDATE_REMINDERS': 
          return action.reminder
      default: 
        return state
  }
}