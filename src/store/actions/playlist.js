import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'store/actions/loaders'

export const FETCH_PLAYLIST_SUCCESS = 'FETCH_PLAYLIST_SUCCESS'

export const fetchPlaylist = (playlistId) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `playlists/${playlistId}`
    )
    .then(payload => {
      dispatch({ type: FETCH_PLAYLIST_SUCCESS, payload })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
