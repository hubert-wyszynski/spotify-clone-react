import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const searchForItems = (query) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: SEARCH })

  return axios
    .get(
      'search',
      {
        params: {
          q: query,
          type: 'album,playlist,track'
        }
      }
    )
    .then(payload => {
      dispatch({ type: SEARCH_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
    })
}
