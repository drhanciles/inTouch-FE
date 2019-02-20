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
    const contact = {
      id: 1, 
      name: 'Jim'
    }
    
    const action = {
      type: 'CREATE_CONTACT', 
      contact
    }

    const expexted = [
      {
        id: action.id,
        name: action.name
      }
    ]

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
  
  it('should update state with a all contacts when the action type is GET_ALL_CONTACTS', () => {
    const contact =   {
        name: 'Derek', 
        lastContacted: '2019-01-17'
      }
      
    const mockData = [ contact, contact ]
                 
    const action = {
      type: 'GET_ALL_CONTACTS', 
      contacts: mockData
    }

    const expected = { contacts: action.contacts }

    const result = userReducer({}, action)

    expect(result).toEqual(expected)
  })
})