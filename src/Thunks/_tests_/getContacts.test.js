import { getContacts } from '../getContacts'
import { isLoading, hasErrored } from '../../actions/index.js'

describe('getContacts', () => {
  let mockUrl
  let mockContact
  let mockToken
  let mockDispatch
  beforeEach(() => {
    mockUrl = 'www.mockurl.com'
    mockContact = {
      id: 1,
      name: 'Rajaa',
      lastContacted: '20-20-1090'
    }
    mockToken = '0987token'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with isLoading(true)', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true
    }))

    const thunk = getContacts(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
  
  it('should dispatch hasErrored(true) if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false, 
      statusText: 'Unable to get contacts.'
    }))
    
    const thunk = getContacts(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored(true))
  })
  
  it('should dispatch isLoading(false) if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = getContacts(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
  
  it('should dispatch isLoading(false) if response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }))
    
    const thunk = getContacts(mockUrl)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })
})