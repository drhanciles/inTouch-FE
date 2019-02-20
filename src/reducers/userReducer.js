export const userReducer = (state={}, action) => {
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
      default: 
        return state
  }
}