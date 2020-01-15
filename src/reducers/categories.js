import { FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILURE } from 'actions/categories'

const initialState = {
  items: null,
  fetchingCategoriesPending: false
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.categories.items,
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
