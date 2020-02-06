import { FETCH_NEW_RELEASES_SUCCESS } from 'actions/releases'

const initialState = {
  items: null
}

const releases = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.albums.items
      }
    default:
      return state
  }
}

export default releases
