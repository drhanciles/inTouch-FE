import userReducer from './userReducer'

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = userReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})