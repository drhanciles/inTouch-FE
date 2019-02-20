import { hasErrored, isLoading, createContact } from '../actions/index.js'
require('isomorphic-fetch');

export const createContact = (name, frequency, priority) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: '' 

      })
    }
  }
}