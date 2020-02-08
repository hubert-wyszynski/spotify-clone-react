import {
  FETCH_CATEGORY_PLAYLISTS_SUCCESS
} from 'store/actions/categories'

const initialState = {
  items: null
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        items: action.payload.data.playlists.items
      }
    default:
      return state
  }
}

export default categories
