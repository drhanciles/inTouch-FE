import {hasErroredReducer} from './hasErroredReducer'

describe('hasErroredReducer', () => {
  
  it('should return the initial state', () => {
    const expected = false
    const result = hasErroredReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  
  it('should update the state when HAS ERRORED case', () => {
    const action = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }
    const expected = true
    
    const result = hasErroredReducer(false, action)
    
    expect(result).toEqual(expected)
  })
})