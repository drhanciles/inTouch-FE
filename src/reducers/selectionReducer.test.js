import { selectionReducer } from './selectionReducer'

describe('selectionReducer', () => {
  it('should return initial state', () => {
    const expected = ''

    const result = selectionReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})