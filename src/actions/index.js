export const createUser = (name, email, password) => {
  return {
    type: 'CREATE_USER', 
    name, 
    email, 
    password
  }
}

export const signInUser = (email, password) => {
  return {
    type: 'SIGN_IN_USER', 
    email, 
    password
  }
}

