const user = (state={}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        state.id: action.id
      }
    case 'SIGN_IN_USER':
      return {
        state.name: action.name, 
        state.email: action.email
      }
    case 'SIGN_OUT_USER': 
      return {
        state.id: ''
      }
    default: 
      return state
  }
}

export default user