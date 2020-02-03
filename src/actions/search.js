import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'actions/loaders'

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const searchForItems = (query) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: ENABLE_LOADING_STATE })

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
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
