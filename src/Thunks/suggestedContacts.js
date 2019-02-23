import { hasErrored, isLoading, getSuggestions } from '../actions/index.js'; 
require('isomorphic-fetch'); 

export const suggestedContacts = (token) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify({query: `query { contactSuggestions(leadTime: 7) { id name frequency priority nextReminder lastContacted notes contactDetails { id label value preffered } occasions { id description date } } } `}), 
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `JWT ${token}`
        }
      })
      if(!response.ok) {
        dispatch(isLoading(false))
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const data = await response.json()
      dispatch(getSuggestions(data.contactSuggestions))
    } catch(error) {
      dispatch(hasErrored(true))
    }
  }
}