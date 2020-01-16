import { combineReducers } from 'redux'

import album from 'reducers/album'
import categories from 'reducers/categories'
import category from 'reducers/category'
import currentContent from 'reducers/currentContent'
import player from 'reducers/player'
import playlist from 'reducers/playlist'
import releases from 'reducers/releases'
import token from 'reducers/token'
import user from 'reducers/user'

export default combineReducers({
  album,
  categories,
  category,
  currentContent,
  player,
  playlist,
  releases,
  token,
  user
})
