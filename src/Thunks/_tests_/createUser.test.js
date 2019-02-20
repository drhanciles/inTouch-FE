import { createUser } from '../createUser'
import { authenticateUser } from '../authenticateUser'
import { isLoading, hasErrored, signInUser } from '../../actions/index.js'

describe('createUser', () => {
  let mockUrl
  let mockUserName 
  let mockEmail
  let mockPassword
  let mockToken
  let mockDispatch
  beforeEach( () => {
    mockUrl = 'www.mockurl.com'
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
  
  it('should dispatch hasErrored(true) if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, 
      statusText: 'Unable to create account.'
    }))
    
    const thunk = createUser(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })
  
  it('should dispatch isLoading(false) if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = createUser(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
  
  it.skip('should dispatch signInUser if response is ok', async () => {
    const mockUser = {
      username: 'Derek'
    }
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUser)
    }))
    
    const thunk = createUser(mockUserName, mockEmail, mockPassword)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(signInUser(mockUserName, mockToken))
  })  
})