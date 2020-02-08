import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

import {
  ENABLE_LOADING_STATE,
  DISABLE_LOADING_STATE
} from 'store/actions/loaders'

export const FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS'

export const fetchNewReleases = () => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: ENABLE_LOADING_STATE })

  return axios
    .get(
      'browse/new-releases',
      { params: { limit: 50, country: 'PL' } }
    )
    .then(payload => {
      dispatch({ type: FETCH_NEW_RELEASES_SUCCESS, payload })
      dispatch({ type: DISABLE_LOADING_STATE })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DISABLE_LOADING_STATE })
    })
}
