import { addContact } from '../addContact'
import { isLoading, hasErrored } from '../../actions/index.js'

describe('addContact', () => {
  let mockUrl
  let mockName
  let mockPassword
  let mockFrequency
  let mockPriority
  let mockToken
  let mockDispatch
  beforeEach(() => {
    mockUrl = 'www.mockurl.com'
    mockName = 'Action'
    mockPassword = 'anCientAli3n5'
    mockToken = '0987token'
    mockDispatch = jest.fn()
  })

  it('calls dispatch with isLoading(true)', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true
    }))

    const thunk = addContact(mockUrl)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })
})