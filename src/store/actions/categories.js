import { createAxiosInstance } from 'utils/axios'

import store from 'store/index'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS'

export const FETCH_CATEGORY_PLAYLISTS = 'FETCH_CATEGORY_PLAYLISTS'
export const FETCH_CATEGORY_PLAYLISTS_SUCCESS = 'FETCH_CATEGORY_PLAYLISTS_SUCCESS'

export const fetchCategories = () => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: FETCH_CATEGORIES })

  return axios
    .get(
      'browse/categories',
      {
        params: {
          limit: 50,
          locale: 'en-US'
        }
      }
    )
    .then(payload => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
    })
}

export const fetchCategoryPlaylists = (categoryId) => dispatch => {
  const axios = createAxiosInstance(store)
  dispatch({ type: FETCH_CATEGORY_PLAYLISTS })

  return axios
    .get(
      `browse/categories/${categoryId}/playlists`,
      {
        params: {
          limit: 50,
          country: 'US'
        }
      }
    )
    .then(payload => {
      dispatch({ type: FETCH_CATEGORY_PLAYLISTS_SUCCESS, payload })
    })
    .catch(err => {
      console.log(err)
    })
}
