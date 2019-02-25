import { hasErrored, isLoading, createContact } from '../actions/index.js'
require('isomorphic-fetch');

export const addContact = (name, priority, frequency, notes, token) => { 
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const variables = {
        input: {
          name: name, 
          priority: parseInt(priority), 
          frequency: parseInt(frequency), 
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