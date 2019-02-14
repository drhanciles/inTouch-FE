export const createUser = (name, email, password) => {
  return {
    type: 'CREATE_USER', 
    name, 
    email, 
    password
  }
}

