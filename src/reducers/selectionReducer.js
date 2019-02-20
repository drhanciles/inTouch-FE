export const selectionReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_SELECTION': 
      return action.selection
    default: 
      return state
  }

}