import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

export const FETCH_NEW_RELEASES = 'FETCH_NEW_RELEASES'
export const FETCH_NEW_RELEASES_SUCCESS = 'FETCH_NEW_RELEASES_SUCCESS'

export const fetchNewReleases = () => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: FETCH_NEW_RELEASES })

  return axios
    .get(
      'browse/new-releases',
      { params: { limit: 50, country: 'US' } }
    )
    .then(payload => {
      dispatch({ type: FETCH_NEW_RELEASES_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
    })
}
