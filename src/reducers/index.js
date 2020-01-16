import { combineReducers } from 'redux'

import album from 'reducers/album'
import categories from 'reducers/categories'
import category from 'reducers/category'
import currentContent from 'reducers/currentContent'
import releases from 'reducers/releases'
import token from 'reducers/token'

export default combineReducers({
  album,
  categories,
  category,
  currentContent,
  releases,
  token
})
