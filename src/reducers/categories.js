import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_PLAYLISTS_SUCCESS
} from 'actions/categories'

const initialState = {
  items: []
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        items: action.payload.data.categories.items
      }
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        header: `${action.payload.categoryName} playlists`,
        items: action.payload.data.playlists.items,
        layout: 'grid',
        type: 'category'
      }
    default:
      return state
  }
}

export default categories
