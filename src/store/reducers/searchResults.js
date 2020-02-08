import {
  SEARCH_SUCCESS
} from 'store/actions/search'

const initialState = {
  data: null
}

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}

export default searchResults
