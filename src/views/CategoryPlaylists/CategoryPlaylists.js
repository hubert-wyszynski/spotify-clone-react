import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchPlaylist } from 'actions/playlist'

import GridItem from 'components/Grid/GridItem'

const CategoryPlaylists = ({
  fetchPlaylist,
  items,
  playlistName
}) => (
  <>
    <Header>{playlistName}</Header>
    <ItemsWrapper>
      {
        items &&
        items.map(item => (
          <GridItem
            clickHandler={fetchPlaylist}
            clickHandlerParams={[item.id]}
            cover={item.images[0].url}
            item={item}
            key={item.id}
            linkTo={`/playlist/${item.id}`}
            title={item.name}
            subtitle={item.description}
          />
        ))
      }
    </ItemsWrapper>
  </>
)

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 18px;
  overflow: scroll;
  overflow-x: hidden;
  height: calc(100% - 76px);
`

const Header = styled.h1`
  color: #fff;
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #717171;
  font-size: 3.8rem;
`

const mapDispatchToProps = {
  fetchPlaylist
}

const mapStateToProps = (state) => ({
  items: state.category.items,
  playlistName: state.category.name
})

CategoryPlaylists.propTypes = {
  fetchPlaylist: PropTypes.func,
  items: PropTypes.array,
  playlistName: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPlaylists)
