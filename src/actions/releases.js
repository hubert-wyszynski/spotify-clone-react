import axios from 'axios'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS'

export const fetchNewReleases = (token) => dispatch => {
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        params: { limit: 50 },
        headers: { Authorization: 'Bearer ' + token }
      }
    )
    .then(payload => {
      dispatch({ type: FETCH_NEW_RELEASES_SUCCESS, payload })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
