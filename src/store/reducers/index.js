import { combineReducers } from 'redux'

import album from 'store/reducers/album'
import categories from 'store/reducers/categories'
import category from 'store/reducers/category'
import loaders from 'store/reducers/loaders'
import player from 'store/reducers/player'
import playlist from 'store/reducers/playlist'
import releases from 'store/reducers/releases'
import searchResults from 'store/reducers/searchResults'
import token from 'store/reducers/token'
import user from 'store/reducers/user'

export default combineReducers({
  album,
  categories,
  category,
  loaders,
  player,
  playlist,
  releases,
  searchResults,
  token,
  user
})
