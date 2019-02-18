export const userReducer = (state={}, action) => {
  switch (action.type) {
      // case 'CREATE_USER':
      //   return {
      //     id: action.id,
      //     name: action.userName
      //   }
      case 'SIGN_IN_USER':
        return {
          id: action.id,
          name: action.userName, 
          token: action.token
        }
      case 'SIGN_OUT_USER': 
        return {}
      default: 
        return state
  }
}