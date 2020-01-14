import { FETCH_CATEGORY, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } from 'actions/category'

const initialState = {
  category: null,
  fetchingCategoryPending: false
}

export const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
        fetchingCategoryPending: false
      }
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        fetchingCategoryPending: false
      }
    case FETCH_CATEGORY:
      return {
        ...state,
        fetchingCategoryPending: true
      }
    default:
      return state
  }
}

export default category
