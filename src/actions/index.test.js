import * as actions from './index.js'

describe('actions', () => {
  it('should return a type of CREATE_USER', () => {
    const name = 'Derek'
    const email = 'derek@email'
    const password = 'password'
    
    const expectedAction = {
      type: 'CREATE_USER',
      name: 'Derek',
      email: 'derek@email',
      password: 'password'
    }
    
    const result = actions.createUser(name, email, password)
    
    expect(result).toEqual(expectedAction)
  })

  it('should return a type of SIGN_IN_USER', () => {
    const id = 1
    const email = 'derek@email'
    const password = 'password'
    
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