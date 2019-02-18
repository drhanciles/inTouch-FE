// export const createUser = (userName, email, password) => ({
//   type: 'CREATE_USER',
//   userName, 
//   email, 
//   password
// })

export const signInUser = (id, userName, token) => ({
  type: 'SIGN_IN_USER',
  id,
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