import { hasErrored, isLoading, createContact } from '../actions/index.js'
require('isomorphic-fetch');

export const addContact = (name, frequency, priority, token) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `mutation CreateContact($contactInput: CreateContactInput!){ createContact(input: $contactInput){ ok contact { id, name } } }`,
        variables: `{"contactInput": {"name": "${name}", "frequency": "${frequecny}", "priority": "${priority}"}}`
        }),
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
      dispatch(createContact(id, name))
    } catch(error) {
      dispatch(hasErrored(true))

    } 
  }
}