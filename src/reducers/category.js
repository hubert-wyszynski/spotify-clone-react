import {
  FETCH_CATEGORY_PLAYLISTS_SUCCESS
} from 'actions/categories'

const initialState = {
  items: null,
  name: null
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        items: action.payload.data.playlists.items,
        name: action.payload.categoryName
      }
    default:
      return state
  }
}

export default categories
