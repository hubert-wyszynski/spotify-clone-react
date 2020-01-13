import { SET_TOKEN } from 'actions/token'

export const token = (state = {}, action) => {
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
