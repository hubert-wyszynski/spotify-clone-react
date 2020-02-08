import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'store/actions/loaders'

export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS'

export const fetchAlbum = (albumId) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      `albums/${albumId}`
    )
    .then(payload => {
      dispatch({ type: FETCH_ALBUM_SUCCESS, payload })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
