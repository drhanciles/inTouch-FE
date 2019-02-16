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

export const signOutUser = () => {
  return {
    type: 'SIGN_OUT_USER'
  }
}

export const createContact = (name, contactType, contactTypeValue,  frequency, priority, notes) => {
  return {
    type: 'CREATE_CONTACT', 
    name, 
    contactType, 
    contactTypeValue, 
    freqeuncy, 
    priority, 
    notes
  }
}
