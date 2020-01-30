import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import ItemCover from 'components/Grid/ItemCover'

import { fetchAlbumTracks } from 'actions/album'
import { fetchCategoryPlaylists } from 'actions/categories'
import { fetchPlaylistTracks } from 'actions/playlist'
import { playTrack } from 'actions/player'

const GridItem = ({
  displayedContent,
  fetchAlbumTracks,
  fetchCategoryPlaylists,
  fetchPlaylistTracks,
  item,
  playTrack
}) => {
  const getImage = (item) => {
    const hasImage = Object.prototype.hasOwnProperty.call(item, 'images')
    const hasIcons = Object.prototype.hasOwnProperty.call(item, 'icons')
    const hasAlbumsCover = Object.prototype.hasOwnProperty.call(item, 'album')

    if (hasImage && item.images.length) {
      return item.images[0].url
    } else if (hasIcons && item.icons.length) {
      return item.icons[0].url
    } else if (hasAlbumsCover) {
      return item.album.images[0].url
    } else return null
  }

  const fetchData = (item) => {
    switch (displayedContent) {
      case 'categories':
        fetchCategoryPlaylists(item.id, item.name)
        break
      case 'releases':
      case 'albums':
        fetchAlbumTracks(item.id, item.name)
        break
      case 'category':
      case 'playlist':
        fetchPlaylistTracks(item.id, item.name)
        break
      case 'track':
        playTrack(item)
        fetchAlbumTracks(item.album.id, item.album.name)
        break
      default:
        break
    }
  }

  return (
    <Wrapper
      key={item.id}
      onClick={() => fetchData(item)}
    >
      <ItemCover
        img={getImage(item)}
      />
      <Title>
        {item.name}
      </Title>
      {item.artists &&
        <Artist>
          {[...item.artists.map(artist => artist.name)].join(', ')}
        </Artist>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`

const Artist = styled.h4`
  color: #989898;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`

const Title = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 6px 0 4px;
`

const mapDispatchToProps = {
  fetchAlbumTracks,
  fetchCategoryPlaylists,
  fetchPlaylistTracks,
  playTrack
}

GridItem.propTypes = {
  displayedContent: PropTypes.string,
  fetchAlbumTracks: PropTypes.func,
  fetchCategoryPlaylists: PropTypes.func,
  fetchPlaylistTracks: PropTypes.func,
  item: PropTypes.object,
  playTrack: PropTypes.func
}

export default connect(null, mapDispatchToProps)(GridItem)
