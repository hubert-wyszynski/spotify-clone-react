import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchForItems } from 'actions/search'
import styled from 'styled-components'

import GridItem from 'components/Grid/GridItem'

const SearchResults = ({
  data,
  location,
  searchForItems
}) => {
  useEffect(() => {
    searchForItems(location.search.substring(3, location.search.length))
  }, [location.search])

  return (
    <>
      <h1>Search results</h1>
      {
        data &&
          <>
            <h2>Albums</h2>
            <GridItemsWrapper>
              {
                data.albums.items.map(item => (
                  <GridItem
                    cover={item.images[0].url}
                    item={item}
                    key={item.id}
                    linkTo={`album/${item.id}`}
                    title={item.name}
                  />
                ))
              }
            </GridItemsWrapper>

            <h2>Tracks</h2>
            <GridItemsWrapper>
              {
                data.tracks.items.map(item => (
                  <GridItem
                    cover={item.album.images[0].url}
                    item={item}
                    key={item.id}
                    linkTo={`album/${item.album.id}`}
                    title={item.name}
                  />
                ))
              }
            </GridItemsWrapper>

            <h2>Playlists</h2>
            <GridItemsWrapper>
              {
                data.playlists.items.map(item => (
                  <GridItem
                    cover={item.images[0].url}
                    item={item}
                    key={item.id}
                    linkTo={`playlist/${item.id}`}
                    title={item.name}
                  />
                ))
              }
            </GridItemsWrapper>

          </>
      }
    </>
  )
}

const GridItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 18px;
  overflow: scroll;
`

const mapDispatchToProps = {
  searchForItems
}

const mapStateToProps = (state) => {
  const { data } = state.searchResults

  return {
    data
  }
}

SearchResults.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  searchForItems: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
