import {
  FETCH_NEW_RELEASES,
  FETCH_NEW_RELEASES_SUCCESS
} from 'store/actions/releases'

const initialState = {
  items: null,
  pending: false
}

const releases = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_RELEASES:
      return {
        ...state,
        pending: true
      }
    case FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.albums.items,
        pending: false
      }
    default:
      return state
  }
}

export default releases
