import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

export const FETCH_ALBUM = 'FETCH_ALBUM'
export const FETCH_ALBUM_SUCCESS = 'FETCH_ALBUM_SUCCESS'

export const fetchAlbum = (albumId) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: FETCH_ALBUM })

  return axios
    .get(
      `albums/${albumId}`
    )
    .then(payload => {
      dispatch({ type: FETCH_ALBUM_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
    })
}
