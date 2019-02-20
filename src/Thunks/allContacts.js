import { hasErrored, isLoading, getAllContactsContact } from '../actions/index.js'
require('isomorphic-fetch');

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlJhamFhIiwiZXhwIjoxNTUwNjk5NDQzLCJvcmlnSWF0IjoxNTUwNjk5MTQzfQ.znAlaQbTXs8-Y5vU7HlVaoiVsSwLDsc-VkNwhLRtDxY"

export const getAllContacts = (token) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `query { contacts { id name lastContacted} }`}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`
        }, 
      })
      if(!response.ok) {
        dispatch(isLoading(false))
        throw Error(reponse.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      dispatch(getAllContacts(contacts))
    } catch(error) {
      dispatch(hasErrored(true))
    } 
  }
}