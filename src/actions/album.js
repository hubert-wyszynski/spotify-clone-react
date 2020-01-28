import axios from 'axios'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const FETCH_ALBUM_TRACKS_SUCCESS = 'FETCH_ALBUM_TRACKS_SUCCESS'

export const fetchAlbumTracks = (albumId, albumName, token) => dispatch => {
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `https://api.spotify.com/v1/albums/${albumId}`,
      { headers: { Authorization: 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_ALBUM_TRACKS_SUCCESS, payload: { ...payload, albumName } })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
