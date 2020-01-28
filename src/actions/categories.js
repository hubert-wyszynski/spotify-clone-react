import axios from 'axios'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'
export const FETCH_CATEGORY_PLAYLISTS_SUCCESS = 'FETCH_CATEGORY_PLAYLISTS_SUCCESS'

export const fetchCategories = (token) => dispatch => {
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      'https://api.spotify.com/v1/browse/categories',
      {
        params: { limit: 50 },
        headers: { Authorization: 'Bearer ' + token }
      }
    )
    .then(payload => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}

export const fetchCategoryPlaylists = (categoryId, categoryName, token) => dispatch => {
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
      {
        params: { limit: 50 },
        headers: { Authorization: 'Bearer ' + token }
      }
    )
    .then(payload => {
      dispatch({ type: FETCH_CATEGORY_PLAYLISTS_SUCCESS, payload: { ...payload, categoryName } })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
