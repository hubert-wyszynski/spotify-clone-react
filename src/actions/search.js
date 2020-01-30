import axios from 'axios'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const searchForItems = (query, token) => dispatch => {
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      'https://api.spotify.com/v1/search',
      {
        params: {
          q: query,
          type: 'album,artist,playlist,track'
        },
        headers: { Authorization: 'Bearer ' + token }
      }
    )
    .then(payload => {
      dispatch({ type: SEARCH_SUCCESS, payload })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
