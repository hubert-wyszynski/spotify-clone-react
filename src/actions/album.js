import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const FETCH_ALBUM_TRACKS_SUCCESS = 'FETCH_ALBUM_TRACKS_SUCCESS'

export const fetchAlbumTracks = (albumId, albumName) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `albums/${albumId}`
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
