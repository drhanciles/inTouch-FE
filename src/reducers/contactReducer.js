export const contactReducer = (state={}, action) => {
  switch (action.type) {
    case 'GET_CURRENT_CONTACT':
      return action.contact
    default:
      return state
  }
}
