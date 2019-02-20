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
      case 'GET_ALL_CONTACTS':
        return {
          contacts:[...state.contacts, {name: 'Derek', lastContacted: '2019-01-17' }, {name: 'Rajaa', lastContacted: '2019-01-18' }]
        }
      default: 
        return state
  }
}