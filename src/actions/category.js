import axios from 'axios'

export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'

export const fetchCategory = (token) => dispatch => {
  dispatch({ type: 'FETCH_CATEGORY' })

  return axios
    .get(
      'https://api.spotify.com/v1/browse/categories',
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      console.log(payload)
      dispatch({ type: 'FETCH_CATEGORY_SUCCESS', payload })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: 'FETCH_CATEGORY_FAILURE' })
    })
}
