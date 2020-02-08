import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { fetchAlbum } from 'actions/album'

import Cover from 'components/Cover/Cover'
import List from 'components/List/List'

const Album = ({
  albumType,
  artists,
  fetchAlbum,
  images,
  match,
  name,
  tracks
}) => {
  useEffect(() => {
    fetchAlbum(match.params.id)
  }, [match.url])

  return (
    <>
      <HeaderWrapper>
        {
          images &&
            <Cover size={200} img={images[0].url} />
        }
        <InfoWrapper>
          <Label capitalize>
            {albumType}
          </Label>
          <Title>
            {name}
          </Title>
          {
            artists &&
              <Description>
                By <Owner>{[...artists.map(artist => artist.name)].join(', ')}</Owner>
              </Description>
          }
          <Stats>
            <Label>
              {tracks.length} songs
            </Label>
          </Stats>
        </InfoWrapper>
      </HeaderWrapper>
      <List items={tracks} />
    </>
  )
}

const mapDispatchToProps = {
  fetchAlbum
}

const mapStateToProps = (state) => {
  const { albumType, artists, images, name, tracks } = state.album

  return {
    albumType, artists, images, name, tracks
  }
}

Album.propTypes = {
  albumType: PropTypes.string,
  artists: PropTypes.array,
  fetchAlbum: PropTypes.func,
  images: PropTypes.array,
  name: PropTypes.string,
  match: PropTypes.object,
  tracks: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)

const HeaderWrapper = styled.div`
  display: flex;
`

const InfoWrapper = styled.div`
  padding: 0 16px;
`

const Label = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 200;
  color: #fff;
  
  ${({ capitalize }) => (
    capitalize && css`
      text-transform: capitalize
    `
  )}
`

const Title = styled.h3`
  color: #fff;
  font-size: 3.0rem;
  margin: 12px 0;
  font-weight: 700;
`

const Description = styled.p`
  color: #9c9c9c;
  font-size: 1.2rem;
  margin: 0 0 8px;
`

const Owner = styled.span`
  color: #fff;
  font-weight: 600;
`

const Stats = styled.div`
  margin-top: 20px;
`