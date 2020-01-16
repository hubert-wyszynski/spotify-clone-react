import { FETCH_ALBUM_TRACKS, FETCH_ALBUM_TRACKS_SUCCESS, FETCH_ALBUM_TRACKS_FAILURE } from 'actions/album'

const initialState = {
  items: null,
  albumCover: null,
  fetchingAlbumTracksPending: false
}

const album = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_TRACKS_SUCCESS:
      return {
        ...state,
        items: action.payload.data.tracks.items,
        albumCover: action.payload.data.images[0].url,
        fetchingAlbumTracksPending: false
      }
    case FETCH_ALBUM_TRACKS_FAILURE:
      return {
        ...state,
        fetchingAlbumTracksPending: false
      }
    case FETCH_ALBUM_TRACKS:
      return {
        ...state,
        fetchingAlbumTracksPending: true
      }
    default:
      return state
  }
}

export default album
