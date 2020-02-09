import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchForItems } from 'store/actions/search'
import styled from 'styled-components'

import Grid from 'components/shared/Grid/Grid'
import GridItem from 'components/shared/GridItem/GridItem'
import H1 from 'components/shared/H1/H1'
import H3 from 'components/shared/H3/H3'

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
      <H1>Search results</H1>
      {
        data &&
          <ResultsWrapper>
            <H3>Tracks</H3>
            <Grid>
              {
                data.tracks.items.map(item => (
                  <GridItem
                    cover={item.album.images[0].url}
                    item={item}
                    key={item.id}
                    linkTo={`album/${item.album.id}`}
                    title={item.name}
                    subtitle={[...item.artists.map(artist => artist.name)].join(', ')}
                  />
                ))
              }
            </Grid>

            <H3>Albums</H3>
            <Grid>
              {
                data.albums.items.map(item => (
                  <GridItem
                    cover={item.images[0].url}
                    item={item}
                    key={item.id}
                    linkTo={`album/${item.id}`}
                    title={item.name}
                    subtitle={[...item.artists.map(artist => artist.name)].join(', ')}
                  />
                ))
              }
            </Grid>

            <H3>Playlists</H3>
            <Grid>
              {
                data.playlists.items.map(item => (
                  <GridItem
                    cover={item.images.length ? item.images[0].url : null}
                    item={item}
                    key={item.id}
                    linkTo={`playlist/${item.id}`}
                    title={item.name}
                  />
                ))
              }
            </Grid>

          </ResultsWrapper>
      }
    </>
  )
}

const ResultsWrapper = styled.div`
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
