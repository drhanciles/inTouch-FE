export const contactsReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACTS':
      return action.contacts
    case 'CREATE_CONTACT':
      return action.cantact
    case 'GET_CURRENT_CONTACT': 
    default: 
      return state
  }
}