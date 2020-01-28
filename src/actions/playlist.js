import axios from 'axios'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const FETCH_PLAYLIST_TRACKS_SUCCESS = 'FETCH_PLAYLIST_TRACKS_SUCCESS'

export const fetchPlaylistTracks = (playlistId, playlistName, token) => dispatch => {
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      { headers: { Authorization: 'Bearer ' + token } }
    )
    .then(payload => {
      dispatch({ type: FETCH_PLAYLIST_TRACKS_SUCCESS, payload: { ...payload, playlistName } })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
