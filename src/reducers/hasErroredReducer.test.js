import {hasErroredReducer} from './hasErroredReducer'

describe('hasErroredReducer', () => {
  
  it('should return the initial state', () => {
    const expected = false
    const result = hasErroredReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})