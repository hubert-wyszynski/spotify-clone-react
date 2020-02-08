import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchPlaylist } from 'store/actions/playlist'

import Cover from 'components/Cover/Cover'
import List from 'components/List/List'

const Playlist = ({
  title,
  description,
  tracks,
  images,
  followers,
  owner,
  match,
  fetchPlaylist
}) => {
  useEffect(() => {
    fetchPlaylist(match.params.id)
  }, [match.url])
  return (
    <>
      <HeaderWrapper>
        {
          images &&
            <Cover size={200} img={images[0].url} />
        }
        <InfoWrapper>
          <Label>
            PLAYLIST
          </Label>
          <Title>
            {title}
          </Title>
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
      <List items={tracks} />
    </>
  )
}

const mapStateToProps = (state) => {
  const { title, description, tracks, images, followers, owner } = state.playlist

  return {
    title, description, tracks, images, followers, owner
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
