import { selectionReducer } from './selectionReducer'

describe('selectionReducer', () => {
  it('should return initial state', () => {
    const expected = ''

    const result = selectionReducer(undefined, {})

    expect(result).toEqual(expected)
  })
  it('should update state with a selection when a selection is given', () => {
    const expected = 'all-contacts'

    const action = {
      type: 'SET_SELECTION', 
      selection: 'all-contacts'
    }

    const result = selectionReducer('', action)

    expect(result).toEqual(expected)
  })
})