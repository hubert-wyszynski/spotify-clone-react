import { combineReducers } from 'redux'

import album from 'reducers/album'
import categories from 'reducers/categories'
import category from 'reducers/category'
import loaders from 'reducers/loaders'
import player from 'reducers/player'
import playlist from 'reducers/playlist'
import releases from 'reducers/releases'
import searchResults from 'reducers/searchResults'
import token from 'reducers/token'
import user from 'reducers/user'

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
