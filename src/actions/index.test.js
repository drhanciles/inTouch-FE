import * as actions from './index.js'

describe('actions', () => {
  const id = 1
  const userName = 'Derek'
  const token = 'token12345'
  // const email = 'derek@email'
  // const password = 'password'
  
  // it('should return a type of CREATE_USER', () => {
  //   const expectedAction = {
  //     type: 'CREATE_USER',
  //     userName,
  //     email,
  //     password
  //   }
  // 
  //   const result = actions.createUser(userName, email, password)
  // 
  //   expect(result).toEqual(expectedAction)
  // })

  it('should return a type of SIGN_IN_USER', () => {
    const expectedAction = {
      type: 'SIGN_IN_USER',
      id, 
      userName, 
      token
    }
    
    const result = actions.signInUser(id, userName, token)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of SIGN_OUT_USER', () => {
    const expectedAction = {
      type: 'SIGN_OUT_USER'
    }
    
    const result = actions.signOutUser()
    
    expect(result).toEqual(expectedAction)
  })
  
  
  it('should return a type of IS_LOADING', () => {
    const isLoading = true
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading
    }
    
    const result = actions.isLoading(isLoading)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of HAS_ERRORED', () => {
    const hasErrored = true
    const expectedAction = {
      type: 'HAS_ERRORED',
      hasErrored
    }
    
    const result = actions.hasErrored(hasErrored)
    
    expect(result).toEqual(expectedAction)
  })
})