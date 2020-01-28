import { FETCH_ALBUM_TRACKS_SUCCESS } from 'actions/album'
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_PLAYLISTS_SUCCESS
} from 'actions/categories'
import { FETCH_PLAYLIST_TRACKS_SUCCESS } from 'actions/playlist'
import { FETCH_NEW_RELEASES_SUCCESS } from 'actions/releases'

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
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        header: 'Categories list',
        items: action.payload.data.categories.items,
        layout: 'grid',
        type: 'categories'
      }
    case FETCH_CATEGORY_PLAYLISTS_SUCCESS:
      return {
        ...state,
        header: `${action.payload.categoryName} playlists`,
        items: action.payload.data.playlists.items,
        layout: 'grid',
        type: 'category'
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
    default:
      return state
  }
}

export default currentContent
