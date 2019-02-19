import * as actions from './index.js'

describe('actions', () => {
  const userName = 'Derek'
  const token = 'token12345'

  it('should return a type of SIGN_IN_USER', () => {
    const expectedAction = {
      type: 'SIGN_IN_USER',
      userName, 
      token
    }
    
    const result = actions.signInUser(userName, token)
    
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
  
  it('should return a type of CREATE_CONTACT', () => {
    const name = 'Rajaa'
    const contactType = 'Email'
    const contactInformation = 'rajaa@email'
    const frequency = 'weekly' 
    const priority = 3
    const notes = ''
    
    const expectedAction = {
      type: 'CREATE_CONTACT',
      name: 'Rajaa',
      contactType: 'Email',
      contactInformation: 'rajaa@email',
      frequency: 'weekly',
      priority: 3,
      notes: ''
    }
    
    const result = actions.createContact(name, contactType, contactInformation, frequency, priority, notes)
    
    expect(result).toEqual(expectedAction)
  })
})