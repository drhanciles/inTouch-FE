export const createUser = (name, email, password) => ({
  type: 'CREATE_USER',
  name, 
  email, 
  password
})

export const signInUser = (email, password) => ({
  type: 'SIGN_IN_USER',
  email, 
  password
})

export const signOutUser = () => ({
  type: 'SIGN_OUT_USER'
})

