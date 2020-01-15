import axios from 'axios'

import { SET_CURRENT_CONTENT } from 'actions/currentContent'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

export const fetchCategories = (token) => dispatch => {
  dispatch({ type: FETCH_CATEGORIES })

  return axios
    .get(
      'https://api.spotify.com/v1/browse/categories',
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload })
      dispatch({
        type: SET_CURRENT_CONTENT,
        payload: {
          display: 'grid',
          data: 'categories',
          header: 'Categories'
        }
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_CATEGORIES_FAILURE })
    })
}
