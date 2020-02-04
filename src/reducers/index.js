import { combineReducers } from 'redux'

import categories from 'reducers/categories'
import currentContent from 'reducers/currentContent'
import loaders from 'reducers/loaders'
import player from 'reducers/player'
import token from 'reducers/token'
import user from 'reducers/user'

export default combineReducers({
  categories,
  currentContent,
  loaders,
  player,
  token,
  user
})
