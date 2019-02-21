import { hasErrored, isLoading } from '../actions/index.js'
require('isomorphic-fetch');


export const getCurrentContact = () => {
  const id = 4
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IlJhamFhIiwiZXhwIjoxNTUwNjk5NDQzLCJvcmlnSWF0IjoxNTUwNjk5MTQzfQ.znAlaQbTXs8-Y5vU7HlVaoiVsSwLDsc-VkNwhLRtDxY"

  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `query { contact(id: ${id}) { id name frequency priority nextReminder lastContacted notes contactDetails { id label value preferred } occasions { id description date } } }`}),
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
      console.log(data)
    } catch(error) {
      dispatch(hasErrored(true))
    } 
  }
}