import {
  FETCH_CATEGORIES_SUCCESS
} from 'store/actions/categories'

const initialState = {
  items: []
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.categories.items
      }
    default:
      return state
  }
}

export default categories
