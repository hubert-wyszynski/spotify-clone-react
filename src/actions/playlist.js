import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const FETCH_PLAYLIST_TRACKS_SUCCESS = 'FETCH_PLAYLIST_TRACKS_SUCCESS'

export const fetchPlaylistTracks = (playlistId, playlistName) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `playlists/${playlistId}/tracks`
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
