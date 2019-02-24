export const contactsReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACTS':
      return action.contacts
    case 'GET_CURRENT_CONTACT': 
      return action.contact
    default: 
      return state
  }
}