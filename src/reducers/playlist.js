import {
  FETCH_PLAYLIST_TRACKS,
  FETCH_PLAYLIST_TRACKS_SUCCESS,
  FETCH_PLAYLIST_TRACKS_FAILURE
} from 'actions/playlist'

const initialState = {
  items: null,
  fetchingPlaylistTracksPending: false
}

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        items: action.payload.data.items,
        fetchingPlaylistTracksPending: false
      }
    case FETCH_PLAYLIST_TRACKS_FAILURE:
      return {
        ...state,
        fetchingPlaylistTracksPending: false
      }
    case FETCH_PLAYLIST_TRACKS:
      return {
        ...state,
        fetchingPlaylistTracksPending: true
      }
    default:
      return state
  }
}

export default playlist
