export const contactsReducer = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_CONTACT':
      return action.cantact
    case 'GET_ALL_CONTACTS':
      return action.contacts
    case 'GET_CURRENT_CONTACT': 
      return action.cantact
    default: 
      return state
  }
}