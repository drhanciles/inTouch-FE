import { isLoading, hasErrored, signInUser } from '../Actions/index.js'
require('isomorphic-fetch');

export const authenticateUser = (userName, password) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: "mutation {tokenAuth(userName, password){token}}"}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        dispatch(isLoading(false))
        throw Error(response.statusText)
      }
      const data = await response.json()
      const token = data.data.tokenAuth.token
      return token
    } catch (error) {
        dispatch(hasErrored(true))
    }
  }
}