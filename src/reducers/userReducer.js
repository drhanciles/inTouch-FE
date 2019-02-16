const user = (state={}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        state.id: action.id
      }
    case 'SIGN_IN_USER':
      return {
        state.id: action.id,
        state.name: action.name, 
        state.email: action.email
      }
    case 'SIGN_OUT_USER': 
      return {
        state.id: '', 
        state.name: '', 
        state.email: ''
      }
    default: 
      return state
  }
}

export default user