import { hasErrored, isLoading, getAllContacts } from '../actions/index.js'
require('isomorphic-fetch');


export const getContacts = (token) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `query { contacts { id name lastContacted } }`}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`
        },
      })
      if(!response.ok) {
        dispatch(isLoading(false))
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      dispatch(getAllContacts(data.data.contacts))
    } catch(error) {
      dispatch(hasErrored(true))
    } 
  }
}