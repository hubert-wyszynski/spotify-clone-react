import React from 'react'

import styled from 'styled-components'

const Player = () => (
  <PlayerWrapper>
    <NextPrevButton className='fas fa-step-backward' />
    <PlayStopButton className='fas fa-play' />
    <NextPrevButton className='fas fa-step-forward' />
  </PlayerWrapper>
)

const NextPrevButton = styled.i`
  cursor: pointer;
  color: #efefef;
  padding: 0 16px;
`

const PlayStopButton = styled.i`
  border: 1px solid #efefef;
  border-radius: 50%;
  color: #efefef;
  cursor: pointer;
  padding: 8px 8px 8px 10px;
`

const PlayerWrapper = styled.div`
  align-items: center;
  display: flex;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default Player
