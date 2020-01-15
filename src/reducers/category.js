import {
  FETCH_CATEGORY_PLAYLISTS,
  FETCH_CATEGORY_PLAYLISTS_SUCCESS,
  FETCH_CATEGORY_PLAYLISTS_FAILURE
} from 'actions/category'

const initialState = {
  items: null,
  fetchingCategoryPending: false
}

const category = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        items: action.payload.data.playlists.items,
        fetchingCategoryPending: false
      }
    case FETCH_CATEGORY_PLAYLISTS_FAILURE:
      return {
        ...state,
        fetchingCategoryPending: false
      }
    case FETCH_CATEGORY_PLAYLISTS:
      return {
        ...state,
        fetchingCategoryPending: true
      }
    default:
      return state
  }
}

export default category
