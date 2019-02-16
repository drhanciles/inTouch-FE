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
    const email = 'derek@email'
    const password = 'password'
    
    const expectedAction = {
      type: 'SIGN_IN_USER',
      email: 'derek@email',
      password: 'password'
    }
    
    const result = actions.signInUser(email, password)
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of SIGN_OUT_USER', () => {
    const expectedAction = {
      type: 'SIGN_OUT_USER'
    }
    
    const result = actions.signOutUser()
    
    expect(result).toEqual(expectedAction)
  })
  
  it('should return a type of CREATE_CONTACT', () => {
    const name = 'Rajaa'
    const contactType = 'Email'
    const contactTypeValue = 'rajaa@email'
    const frequency = 'weekly' 
    const priority = 3
    const notes = ''
    
    const expectedAction = {
      type: 'CREATE_CONTACT',
      name: 'Rajaa',
      contactType: 'Email',
      contactTypeValue: 'rajaa@email',
      frequency: 'weekly',
      priority: 3,
      notes: ''
    }
    
    const result = actions.createContact(name, contactType, contactTypeValue, frequency, priority, notes)
    
    expect(result).toEqual(expectedAction)
  })
})