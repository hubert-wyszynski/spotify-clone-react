import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { fetchAlbum } from 'store/actions/album'

import LoaderProvider from 'providers/LoaderProvider'
import H2 from 'components/shared/H2/H2'
import Cover from 'components/shared/Cover/Cover'
import TracksList from 'components/shared/TracksList/TracksList'

const Album = ({
  albumType,
  artists,
  fetchAlbum,
  images,
  isLoading,
  match,
  name,
  tracks
}) => {
  useEffect(() => {
    fetchAlbum(match.params.id)
  }, [match.url])

  return (
    <LoaderProvider isLoading={isLoading}>
      <HeaderWrapper>
        {
          images &&
            <Cover
              img={images[0].url}
              hoverEffect={false}
              size={200}
            />
        }
        <InfoWrapper>
          <Label capitalize>
            {albumType}
          </Label>
          <H2>
            {name}
          </H2>
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
      <TracksList items={tracks} />
    </LoaderProvider>
  )
}

const mapDispatchToProps = {
  fetchAlbum
}

const mapStateToProps = (state) => {
  const { albumType, artists, images, name, tracks, pending } = state.album

  return {
    albumType,
    artists,
    images,
    name,
    tracks,
    isLoading: pending
  }
}

Album.propTypes = {
  albumType: PropTypes.string,
  artists: PropTypes.array,
  fetchAlbum: PropTypes.func,
  images: PropTypes.array,
  isLoading: PropTypes.bool,
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
      text-transform: capitalize;
    `
  )}
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
