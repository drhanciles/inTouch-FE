export const createUser = (name, email, password) => {
  return {
    type: 'CREATE_USER', 
    name, 
    email, 
    password
  }
}

export const signInUser = (id, email, password) => {
  return {
    type: 'SIGN_IN_USER', 
    id,
    email, 
    password
  }
}

export const signOutUser = () => {
  return {
    type: 'SIGN_OUT_USER'
  }
}

