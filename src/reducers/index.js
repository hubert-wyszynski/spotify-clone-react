import { combineReducers } from 'redux'

import token from 'reducers/token'
import categories from 'reducers/categories'
import category from 'reducers/category'

export default combineReducers({
  categories,
  category,
  token
})
