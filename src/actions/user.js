import axios from 'axios'

export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const getUser = (token) => dispatch => {
  dispatch({ type: GET_USER })

  return axios
    .get(
      'https://api.spotify.com/v1/me',
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: GET_USER_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: GET_USER_FAILURE })
    })
}
