import { hasErrored, isLoading } from '../actions/index.js'
require('isomorphic-fetch');

export const editContact = (obj, token) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  const variables = obj
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: `mutation UpdateContact($id:Int!, $input: UpdateContactInput!) { updateContact(id: $id, input: $input){ { ok contact { name } } }`, 
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
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}