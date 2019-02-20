import {userReducer} from './userReducer'

describe('userReducer', () => {
  
  it('should return the initial state', () => {
    const expected = {}
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  
  const userName = 'Derek'
  const token = 'token12345'
  
  it('should update state with username and token when SIGN_IN_USER case', () => {
    const mockData = {userName, token}
    const action = {
      type: 'SIGN_IN_USER', 
      data: mockData
    }
    
    const expected = {userName: action.userName, token: action.token}

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
  
  it('should update state with empty object when SIGN_OUT_USER case', () => {
    const action = {
      type: 'SIGN_OUT_USER'
    }
    
    const expected = {}

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
  it('should update state with a contact when the action type is CREATE_CONTACT', () => {
    const name = 'Jim'
    const action = {
      type: 'CREATE_CONTACT', 
      name
    }

    const expexted = [
      {name: action.name}
    ]

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
  it('should update state with changes to a contact when the action type is UPDATE_CONTACT', () => {
    const contact = {
      name: 'Dave', 
      frequency: 5, 
      priority: 3
    }

    const updatedContact = {
      name: 'Dave', 
      frequency: 3, 
      priority: 1
    }

    const action = {
      type: 'UPDATE_CONTACT', 
      contact: updatedContact
    }

    const expected = [updatedContact]

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
})