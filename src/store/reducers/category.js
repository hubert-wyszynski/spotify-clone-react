import {
  FETCH_CATEGORY_PLAYLISTS,
  FETCH_CATEGORY_PLAYLISTS_SUCCESS
} from 'store/actions/categories'

const initialState = {
  items: null,
  pending: false
}

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_PLAYLISTS:
      return {
        ...state,
        items: [],
        pending: true
      }
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        items: action.payload.data.playlists.items,
        pending: false
      }
    default:
      return state
  }
}

export default categories
