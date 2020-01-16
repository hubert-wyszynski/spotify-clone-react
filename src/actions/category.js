import axios from 'axios'

import { SET_CURRENT_CONTENT } from 'actions/currentContent'

export const FETCH_CATEGORY_PLAYLISTS = 'FETCH_CATEGORY_PLAYLISTS'
export const FETCH_CATEGORY_PLAYLISTS_FAILURE = 'FETCH_CATEGORY_PLAYLISTS_FAILURE'
export const FETCH_CATEGORY_PLAYLISTS_SUCCESS = 'FETCH_CATEGORY_PLAYLISTS_SUCCESS'

export const fetchCategoryPlaylists = (categoryId, categoryName, token) => dispatch => {
  dispatch({ type: FETCH_CATEGORY_PLAYLISTS })

  return axios
    .get(
      `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_CATEGORY_PLAYLISTS_SUCCESS, payload })
      dispatch({
        type: SET_CURRENT_CONTENT,
        payload: {
          display: 'grid',
          data: 'category',
          header: `${categoryName} playlists`
        }
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_CATEGORY_PLAYLISTS_FAILURE })
    })
}
