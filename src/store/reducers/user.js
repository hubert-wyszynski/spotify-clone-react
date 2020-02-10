import { GET_USER_SUCCESS } from 'store/actions/user'

const initial = {
  user: null
}

const user = (state = initial, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default user
