import { combineReducers } from 'redux'

import token from 'reducers/token'
import categories from 'reducers/categories'
import category from 'reducers/category'
import currentContent from 'reducers/currentContent'
import releases from 'reducers/releases'

export default combineReducers({
  categories,
  category,
  currentContent,
  releases,
  token
})
