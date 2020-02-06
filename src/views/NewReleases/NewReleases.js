import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GridItem from 'components/Grid/GridItem'

import { fetchAlbum } from 'actions/album'

const NewReleases = ({
  fetchAlbum,
  items
}) => (
  <>
    <Header>New releases</Header>
    <Subheader>The best new releases</Subheader>
    <ItemsWrapper>
      {
        items &&
        items.map(item => (
          <GridItem
            clickHandler={fetchAlbum}
            clickHandlerParams={[item.id]}
            cover={item.images[0].url}
            item={item}
            key={item.id}
            linkTo={`album/${item.id}`}
            title={item.name}
            subtitle={[...item.artists.map(artist => artist.name)].join(', ')}
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
  height: calc(100% - 122px);
`

const Header = styled.h1`
  color: #fff;
  margin: 0 0 12px;
  font-size: 3.8rem;
`

const Subheader = styled.h2`
  color: #fff;
  margin: 0 1px 16px;
  font-size: 1.4rem;
  font-weight: 400;
  border-bottom: 1px solid #717171;
  padding-bottom: 12px;
`

const mapDispatchToProps = {
  fetchAlbum
}

const mapStateToProps = (state) => {
  const { releases } = state
  return {
    items: releases.items
  }
}

NewReleases.propTypes = {
  fetchAlbum: PropTypes.func,
  items: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases)
