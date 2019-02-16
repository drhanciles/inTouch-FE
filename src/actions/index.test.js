import * as actions from './index.js'

describe('actions', () => {
  const id = 1
  const name = 'Derek'
  const email = 'derek@email'
  const password = 'password'
  
  it('should return a type of CREATE_USER', () => {
    const expectedAction = {
      type: 'CREATE_USER',
      name,
      email,
      password
    }
    
    const result = actions.createUser(name, email, password)
    
    expect(result).toEqual(expectedAction)
  })

  it('should return a type of SIGN_IN_USER', () => {
    const expectedAction = {
      type: 'SIGN_IN_USER',
      id,
      email,
      password
    }
    
    const result = actions.signInUser(id, email, password)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of SIGN_OUT_USER', () => {
    const expectedAction = {
      type: 'SIGN_OUT_USER'
    }
    
    const result = actions.signOutUser()
    
    expect(result).toEqual(expectedAction)
  })
})
