export const PLAY_TRACK = 'PLAY_TRACK'
export const CLEAR_PLAYER = 'CLEAR_PLAYER'

export const playTrack = track => {
  return {
    type: PLAY_TRACK,
    track
  }
}

export const clearPlayer = () => {
  return {
    type: CLEAR_PLAYER
  }
}
