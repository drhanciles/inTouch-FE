import { isLoading, hasErrored } from '../actions/index.js'
import { authenticateUser }  from './authenticateUser'
require('isomorphic-fetch');
export const createUser = (userName, email, password) => {
  debugger;
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `mutation { createUser(email:"${email}", username:"${userName}", password:"${password}"){user {username}}}`}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        dispatch(isLoading(false))
        throw Error(response.statusText)
      }
        dispatch(isLoading(false))
      const data = await response.json()
      const name = data.data.createUser.user.username
      const token = await dispatch(authenticateUser(name, password))
      dispatch(signInUser(name, token))
    } catch (error) {
        dispatch(hasErrored(true))
    }
  }
}