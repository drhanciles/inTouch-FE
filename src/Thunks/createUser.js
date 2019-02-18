import { isLoading, hasErrored, signInUser } from '../Actions/index.js'

const { createApolloFetch } = require('apollo-fetch');

export const createUser = (userName, email, password) => {
  const url = 'https://in-touch-dev.herokuapp.com/api/v1/data/'
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({query: mutation {createUser(email, userName, password){user {userName}}}}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }
}