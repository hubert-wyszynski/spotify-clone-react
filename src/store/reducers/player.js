import {
  PLAY_TRACK,
  CLEAR_PLAYER,
  TOGGLE_PLAYER
} from 'store/actions/player'

const initialState = {
  isPlaying: false,
  track: null
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return {
        ...state,
        isPlaying: true,
        track: action.track
      }
    case CLEAR_PLAYER:
      return {
        ...state,
        isPlaying: false,
        track: null
      }
    case TOGGLE_PLAYER:
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    default:
      return state
  }
}

export default player
