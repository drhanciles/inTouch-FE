export const contactsReducer = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_CONTACT':
      return action.contact
    case 'GET_ALL_CONTACTS':
      return action.contacts
    default:
      return state
  }
}
