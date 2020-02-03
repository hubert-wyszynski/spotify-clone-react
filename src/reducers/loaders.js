import {
  DISABLE_LOADING_STATE,
  ENABLE_LOADING_STATE
} from 'actions/loaders'

const initialState = {
  isDataLoading: false
}

const loaders = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_LOADING_STATE:
      return {
        ...state,
        isDataLoading: true
      }
    case DISABLE_LOADING_STATE:
      return {
        ...state,
        isDataLoading: false
      }
    default:
      return state
  }
}

export default loaders
