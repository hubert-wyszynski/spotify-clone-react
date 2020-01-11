import React from 'react'

import styled from 'styled-components'

const CurrentSong = () => (
  <CurrentSongWrapper>
    <Cover />
    <Info>
      <Title>Some great shit</Title>
      <Artist>Ayyyyyyt</Artist>
    </Info>
  </CurrentSongWrapper>
)

const Artist = styled.p`
  color: #989898;
  font-size: 1.2rem;
  margin: 0;
`

const Cover = styled.div`
  background-color: pink;
  border-radius: 2px;
  height: 44px;
  width: 44px;
`

const CurrentSongWrapper = styled.div`
  display: flex;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 10px;
`

const Title = styled.p`
  color: #efefef;
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0 0 4px;
`

export default CurrentSong
