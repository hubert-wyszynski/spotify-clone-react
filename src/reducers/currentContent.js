import { FETCH_ALBUM_TRACKS_SUCCESS } from 'actions/album'
import { FETCH_PLAYLIST_TRACKS_SUCCESS } from 'actions/playlist'
import { FETCH_NEW_RELEASES_SUCCESS } from 'actions/releases'
import { SEARCH_SUCCESS } from 'actions/search'

const initialState = {
  header: null,
  items: null,
  layout: null,
  type: null
}

const currentContent = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUM_TRACKS_SUCCESS:
      return {
        ...state,
        header: action.payload.albumName,
        items: action.payload.data.tracks.items,
        layout: 'list',
        type: 'album'
        // albumCover: action.payload.data.images[0].url,
      }
    case FETCH_NEW_RELEASES_SUCCESS:
      return {
        ...state,
        header: 'New releases list',
        items: action.payload.data.albums.items,
        layout: 'grid',
        type: 'releases'
      }
    case FETCH_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        header: action.payload.playlistName,
        items: action.payload.data.items,
        layout: 'list',
        type: 'playlist'
      }
    case SEARCH_SUCCESS:
      console.log(action.payload.data)
      return {
        ...state,
        header: 'Search results',
        items: action.payload.data,
        layout: 'mixed',
        type: 'search_results'
      }
    default:
      return state
  }
}

export default currentContent
