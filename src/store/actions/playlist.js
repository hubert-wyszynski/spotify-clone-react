import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

export const FETCH_PLAYLIST = 'FETCH_PLAYLIST'
export const FETCH_PLAYLIST_SUCCESS = 'FETCH_PLAYLIST_SUCCESS'

export const fetchPlaylist = (playlistId) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: FETCH_PLAYLIST })

  return axios
    .get(
      `playlists/${playlistId}`
    )
    .then(payload => {
      dispatch({ type: FETCH_PLAYLIST_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
    })
}
