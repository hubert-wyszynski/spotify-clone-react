import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CurrentSong = ({ track }) => (
  <>
    {
      track &&
        <CurrentSongWrapper>
          <Cover
            src={track.album.images[2].url}
          />
          <Info>
            <Title>
              {track.name}
            </Title>
            <Artist>
              {[...track.artists.map(artist => artist.name)].join(', ')}
            </Artist>
          </Info>
        </CurrentSongWrapper>
    }
  </>
)

const Artist = styled.p`
  color: #989898;
  font-size: 1.2rem;
  margin: 0;
`

const Cover = styled.img`
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

const mapStateToProps = (state) => {
  const { player } = state

  return {
    track: player.track
  }
}

CurrentSong.propTypes = {
  track: PropTypes.object
}

export default connect(mapStateToProps)(CurrentSong)
