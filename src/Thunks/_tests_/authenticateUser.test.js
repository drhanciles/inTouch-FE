import  authenticateUser  from '../authenticateUser'
import { isLoading, hasErrored } from '../../Actions/index.js'

describe('authenticateUser', () => {
  let mockUrl
  let mockUserName
  let mockToken 
  let mockPassword
  let mockDispatch
  beforeEach( () => {
    mockUrl = 'www.mockurl.com'
    mockUserName = 'Derek'
    mockPassword = 'password'
    mockToken = 'token12345'
    mockDispatch = jest.fn()
  })
  
  it('calls dispatch isLoading action', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = authenticateUser(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('should dispatch hasErrored(true) if response not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, 
      statusText: 'Unable to create account.'
    }))
    
    const thunk = authenticateUser(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })
  
  it('should dispatch isLoading(false) if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = authenticateUser(mockUrl)
    
    const result = await thunk(mockDispatch)
    console.log(result)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
})