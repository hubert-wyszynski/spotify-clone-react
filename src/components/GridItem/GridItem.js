import React from 'react'
import PropTypes from 'prop-types'

import { fetchCategoryPlaylists } from 'actions/category'
import { fetchAlbumTracks } from 'actions/album'

import { connect } from 'react-redux'

import styled from 'styled-components'

const GridItem = ({
  currentContent,
  fetchCategoryPlaylists,
  fetchAlbumTracks,
  item,
  token
}) => {
  const getImage = (item) => {
    const hasImage = Object.prototype.hasOwnProperty.call(item, 'images')
    if (hasImage) {
      return item.images[0].url
    } else return item.icons[0].url
  }

  const fetchItem = (item, token) => {
    switch (currentContent.data) {
      case 'categories':
        fetchCategoryPlaylists(item.id, item.name, token)
        break
      case 'releases':
        fetchAlbumTracks(item.id, token)
        break
      default:
        break
    }
  }

  return (
    <Wrapper
      key={item.id}
      onClick={() => fetchItem(item, token)}
    >
      <Image
        src={getImage(item)}
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
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`

const Title = styled.h3`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 12px 0 6px;
`

const Image = styled.img`
  width: 100%;
`

const mapDispatchToProps = {
  fetchAlbumTracks,
  fetchCategoryPlaylists
}

const mapStateToProps = (state) => {
  const { token, currentContent } = state

  return {
    token: token.token,
    currentContent
  }
}

GridItem.propTypes = {
  currentContent: PropTypes.object,
  fetchAlbumTracks: PropTypes.func,
  fetchCategoryPlaylists: PropTypes.func,
  item: PropTypes.object,
  token: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(GridItem)
