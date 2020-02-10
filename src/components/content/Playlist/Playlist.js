import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchPlaylist } from 'store/actions/playlist'

import LoaderProvider from 'providers/LoaderProvider'

import H2 from 'components/shared/H2/H2'
import Cover from 'components/shared/Cover/Cover'
import TracksList from 'components/shared/TracksList/TracksList'

const Playlist = ({
  title,
  description,
  tracks,
  images,
  isLoading,
  followers,
  owner,
  match,
  fetchPlaylist
}) => {
  useEffect(() => {
    fetchPlaylist(match.params.id)
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
          <Label>
            PLAYLIST
          </Label>
          <H2>
            {title}
          </H2>
          {
            description &&
              <Description>
                {description}
              </Description>
          }
          <Description>
            Created by <Owner>{owner}</Owner>
          </Description>
          <Stats>
            <Label>
              {tracks.length} songs
            </Label>
            <Label>
              Followers: {followers}
            </Label>
          </Stats>
        </InfoWrapper>
      </HeaderWrapper>
      <TracksList items={tracks} />
    </LoaderProvider>
  )
}

const mapStateToProps = (state) => {
  const { title, description, tracks, images, followers, owner, pending } = state.playlist

  return {
    title,
    description,
    tracks,
    images,
    followers,
    owner,
    isLoading: pending
  }
}

const mapDispatchToProps = {
  fetchPlaylist
}

Playlist.propTypes = {
  description: PropTypes.string,
  fetchPlaylist: PropTypes.func,
  followers: PropTypes.number,
  images: PropTypes.array,
  isLoading: PropTypes.bool,
  owner: PropTypes.string,
  title: PropTypes.string,
  tracks: PropTypes.array,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)

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
