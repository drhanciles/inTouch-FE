import * as actions from './index.js'

describe('actions', () => {
  it('should have a type of CREATE_USER', () => {
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
})