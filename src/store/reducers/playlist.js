import {
  FETCH_PLAYLIST,
  FETCH_PLAYLIST_SUCCESS
} from 'store/actions/playlist'

const initialState = {
  title: null,
  description: null,
  tracks: [],
  images: null,
  followers: null,
  owner: null,
  pending: false
}

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST:
      return {
        ...state,
        pending: true
      }
    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        title: action.payload.data.name,
        description: action.payload.data.description,
        tracks: [...action.payload.data.tracks.items],
        images: [...action.payload.data.images],
        followers: action.payload.data.followers.total,
        owner: action.payload.data.owner.display_name,
        pending: false
      }
    default:
      return state
  }
}

export default playlist
