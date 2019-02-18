import {userReducer} from './userReducer'

describe('userReducer', () => {
  
  it('should return the initial state', () => {
    const expected = {}
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  
  const id = 1
  const userName = 'Derek'
  const token = 'token12345'
  // const email = 'derek@email'
  // const password = 'password'
  
  // it('should update state with user id and name when CREATE_USER case', () => {
  //   const mockData = {name, email, password}
  //   const action = {
  //     type: 'CREATE_USER', 
  //     data: mockData
  //   }
  // 
  //   const expected = {id: action.id, name: action.name}
  // 
  //   const result = userReducer({}, action)
  // 
  //   expect(result).toEqual(expected)
  // })
  
  it('should update state with user id and name when SIGN_IN_USER case', () => {
    const mockData = {id, userName, token}
    const action = {
      type: 'SIGN_IN_USER', 
      data: mockData
    }
    
    const expected = {id: action.id, userName: action.userName, token: action.token}

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
})