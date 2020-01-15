import { FETCH_NEW_RELEASES, FETCH_NEW_RELEASES_SUCCESS, FETCH_NEW_RELEASES_FAILURE } from 'actions/releases'

const initialState = {
  items: null,
  fetchingReleasesPending: false
}

const releases = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        items: action.payload.data.albums.items,
        fetchingReleasesPending: false
      }
    case FETCH_NEW_RELEASES_FAILURE:
      return {
        ...state,
        fetchingReleasesPending: false
      }
    case FETCH_NEW_RELEASES:
      return {
        ...state,
        fetchingReleasesPending: true
      }
    default:
      return state
  }
}

export default releases
