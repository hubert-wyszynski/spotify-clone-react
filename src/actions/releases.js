import axios from 'axios'

import { SET_CURRENT_CONTENT } from 'actions/currentContent'

export const FETCH_NEW_RELEASES = 'FETCH_NEW_RELEASES'
export const FETCH_NEW_RELEASES_FAILURE = 'FETCH_NEW_RELEASES_FAILURE'
export const FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS'

export const fetchNewReleases = (token) => dispatch => {
  dispatch({ type: FETCH_NEW_RELEASES })

  return axios
    .get(
      'https://api.spotify.com/v1/browse/new-releases',
      { params: {}, headers: { 'Authorization': 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_NEW_RELEASES_SUCCESS, payload })
      dispatch({
        type: SET_CURRENT_CONTENT,
        payload: {
          data: 'releases',
          display: 'grid',
          header: 'New releases'
        }
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_NEW_RELEASES_FAILURE })
    })
}
