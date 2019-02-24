import { hasErrored, isLoading, createContact } from '../actions/index.js'
require('isomorphic-fetch');

export const addContact = (name, frequency, priority, notes, token) => {
  debugger; 
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const variables = {
        input: {
          name: name, 
          frequency: parseInt(frequency), 
          priority: parseInt(priority), 
          notes: notes
        }
      }
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `mutation CreateContact($input: CreateContactInput!){ createContact(input: $input){ ok contact { id, name } } }`,
        variables: variables
        }),
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
      console.log(data)
    } catch(error) {
      dispatch(hasErrored(true))
    } 
  }
}