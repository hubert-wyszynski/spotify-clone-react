import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { clearPlayer } from 'actions/player'

const Player = ({
  clearPlayer,
  track
}) => {
  const togglePlay = () => {
    const player = document.getElementById('myplayer')

    return player.paused ? player.play() : player.pause()
  }

  const handleTrackFinish = () => {
    const player = document.getElementById('myplayer')
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
          className='fas fa-play'
        />
      </PlayStopButton>
      <audio
        id='myplayer'
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
  padding: 7px 7px 8px 10px;
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
  const { track } = state.player

  return {
    track
  }
}

const mapDispatchToProps = {
  clearPlayer
}

Player.propTypes = {
  clearPlayer: PropTypes.func,
  track: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
