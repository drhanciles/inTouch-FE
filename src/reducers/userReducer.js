const user = (state={}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        state.id: action.id,
        state.name: action.name
      }
    case 'SIGN_IN_USER':
      return {
        state.id: action.id,
        state.name: action.name
      }
    case 'SIGN_OUT_USER': 
      return {}
    default: 
      return state
  }
}

export default user