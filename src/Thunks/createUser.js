import { isLoading, hasErrored, signInUser } from '../Actions/index.js'
require('isomorphic-fetch');

export const createUser = (userName, email, password) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: mutation {createUser(email, userName, password){user {userName}}}}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        dispatch(isLoading(false))
        throw Error(response.statusText)
      }
      const data = await response.json()
      const name = data.data.createUser.user.username
      const token = await authenticateUser(name, password)
        dispatch(signInUser(name, token))
    } catch (error) {
        dispatch(hasErrored(true))
    }
  }
}