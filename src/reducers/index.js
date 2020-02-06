import { combineReducers } from 'redux'

import categories from 'reducers/categories'
import category from 'reducers/category'
import loaders from 'reducers/loaders'
import player from 'reducers/player'
import playlist from 'reducers/playlist'
import token from 'reducers/token'
import user from 'reducers/user'

export default combineReducers({
  categories,
  category,
  loaders,
  player,
  playlist,
  token,
  user
})
