import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { clearPlayer, togglePlayer } from 'store/actions/player'

const Player = ({
  clearPlayer,
  isPlaying,
  togglePlayer,
  track
}) => {
  const playerRef = useRef(null)

  const togglePlay = () => {
    const player = playerRef.current
    togglePlayer()
    return player.paused ? player.play() : player.pause()
  }

  const handleTrackFinish = () => {
    const player = playerRef.current
    clearPlayer()
    player.setAttribute('src', null)
  }

  return (
    <PlayerWrapper>
      <PlayStopButton
        onClick={() => togglePlay()}
        disabled={!track}
      >
        <PlayStopIcon
          className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}
        />
      </PlayStopButton>
      <audio
        ref={playerRef}
        src={track ? track.preview_url : null}
        autoPlay
        onEnded={() => handleTrackFinish()}
      />
    </PlayerWrapper>
  )
}

const PlayStopButton = styled.button`
  border: 1px solid #efefef;
  border-radius: 50%;
  cursor: pointer;
  padding: 7px 7px 8px 8px;
  background-color: transparent;
  width: 30px;
  height: 30px;
  outline: none;

  ${({ disabled }) => (
    disabled && css`
      filter: brightness(0.4);
      cursor: auto;
    `
  )}
`

const PlayStopIcon = styled.i`
  color: #efefef;
`

const PlayerWrapper = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

const mapStateToProps = (state) => {
  const { isPlaying, track } = state.player

  return {
    isPlaying,
    track
  }
}

const mapDispatchToProps = {
  clearPlayer,
  togglePlayer
}

Player.propTypes = {
  clearPlayer: PropTypes.func,
  isPlaying: PropTypes.bool,
  togglePlayer: PropTypes.func,
  track: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
