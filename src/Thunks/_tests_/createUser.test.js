import { createUser } from '../createUser'
import { authenticateUser } from '../authenticateUser'
import { isLoading, hasErrored, signInUser } from '../../Actions/index.js'

describe('createUser', () => {
  let mockUrl
  let mockUserName 
  let mockEmail
  let mockPassword
  let mockToken
  let mockDispatch
  
  beforeEach( () => {
    mockUrl = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
    mockUserName = 'Derek'
    mockEmail = 'derek@email.com'
    mockPassword = 'password'
    mockToken = 'token12345'
    mockDispatch = jest.fn()
  })
  
  it('calls dispatch isLoading action', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = createUser(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('should dispatch hasErrored(true) if response not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, 
      statusText: 'Unable to create account.'
    }))
    
    const thunk = createUser(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })
})
