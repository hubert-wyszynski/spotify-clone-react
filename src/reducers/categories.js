import { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from 'actions/categories'

const initialState = {
  categories: null,
  fetchingCategoriesPending: false
}

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data.categories,
        fetchingCategoriesPending: false
      }
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        fetchingCategoriesPending: false
      }
    case FETCH_CATEGORIES:
      return {
        ...state,
        fetchingCategoriesPending: true
      }
    default:
      return state
  }
}

export default categories
