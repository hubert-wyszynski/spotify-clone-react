import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const getUser = () => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: GET_USER })

  return axios
    .get(
      'me'
    )
    .then(payload => {
      dispatch({ type: GET_USER_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: GET_USER_FAILURE })
    })
}
