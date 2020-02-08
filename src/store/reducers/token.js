import { SET_TOKEN } from 'store/actions/token'

const token = (state = {}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export default token
