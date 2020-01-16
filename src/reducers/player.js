import {
  PLAY_TRACK,
  CLEAR_PLAYER
} from 'actions/player'

const initialState = {
  track: null
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        track: action.track
      }
    case CLEAR_PLAYER:
      return {
        ...state,
        track: null
      }
    default:
      return state
  }
}

export default player
