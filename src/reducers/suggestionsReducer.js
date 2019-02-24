export const suggestionsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_SUGGESTIONS': 
      return action.suggestions
    default: 
      return state
  }
}