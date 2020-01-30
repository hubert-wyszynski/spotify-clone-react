import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Grid from 'components/Grid/Grid'

const SearchResults = ({ items }) => {
  return (
    <Wrapper>
      Albumy
      <Grid
        displayedContent='albums'
        items={items.albums.items}
      />

      Playlisty
      <Grid
        displayedContent='playlist'
        items={items.playlists.items}
      />

      Traczki
      <Grid
        displayedContent='track'
        items={items.tracks.items}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: calc(100% - 50px);
  overflow: scroll;
`

SearchResults.propTypes = {
  items: PropTypes.object
}

export default SearchResults
