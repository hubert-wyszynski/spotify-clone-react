import {
  SEARCH,
  SEARCH_SUCCESS
} from 'store/actions/search'

const initialState = {
  data: null,
  pending: false
}

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        pending: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false
      }
    default:
      return state
  }
}

export default searchResults
