import { isLoading, hasErrored } from '../actions/index.js'
require('isomorphic-fetch');

export const authenticateUser = (userName, password) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `mutation {tokenAuth(username: "${userName}", password: "${password}"){token}}`}),
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
      return data.data.tokenAuth.token
    } catch (error) {
        dispatch(hasErrored(true))
    }
  }
}
