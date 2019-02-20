export const signInUser = (userName, token) => ({
  type: 'SIGN_IN_USER',
  userName, 
  token
})

export const signOutUser = () => ({
  type: 'SIGN_OUT_USER'
})

export const isLoading = (check) => ({
  type: 'IS_LOADING',
  isLoading: check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED',
  hasErrored: check
})

export const createContact = (id, name) => ({
    type: 'CREATE_CONTACT', 
    id,
    name, 
})

export const setSelection = (selection) => ({
  type: 'SET_SELECTION', 
  selection
})