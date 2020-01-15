import { SET_CURRENT_CONTENT } from 'actions/currentContent'

const initialState = {}

const currentContent = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default currentContent
