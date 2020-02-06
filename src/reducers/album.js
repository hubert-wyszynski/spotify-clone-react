import { FETCH_ALBUM_SUCCESS } from 'actions/album'

const initialState = {
  albumType: null,
  artists: null,
  images: null,
  name: null,
  tracks: []
}

const album = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_SUCCESS:
      return {
        ...state,
        albumType: action.payload.data.album_type,
        artists: action.payload.data.artists,
        images: action.payload.data.images,
        name: action.payload.data.name,
        tracks: action.payload.data.tracks.items
      }
    default:
      return state
  }
}

export default album
