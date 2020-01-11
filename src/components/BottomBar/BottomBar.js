import React from 'react'

import styled from 'styled-components'

import CurrentSong from './CurrentSong'

const BottomBar = () => (
  <BottomBarWrapper>
    <CurrentSong />
  </BottomBarWrapper>
)

const BottomBarWrapper = styled.div`
  align-items: center;
  background-color: #313131;
  bottom: 0;
  display: flex;
  height: 72px;
  padding: 0px 12px;
  position: absolute;
  width: 100%;
`

export default BottomBar
