import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS
} from 'store/actions/categories'

const initialState = {
  items: [],
  pending: false
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: [],
        pending: true
      }
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.categories.items,
        pending: false
      }
    default:
      return state
  }
}

export default categories
