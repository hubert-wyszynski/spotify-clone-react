import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Grid from 'components/Grid/Grid'

const SearchResults = ({ items }) => {
  return (
    <Wrapper>
      <GroupHeader>
        Albumy
      </GroupHeader>
      <Grid
        displayedContent='albums'
        items={items.albums.items}
      />

      <GroupHeader>
        Playlists
      </GroupHeader>
      <Grid
        displayedContent='playlist'
        items={items.playlists.items}
      />

      <GroupHeader>
        Tracks
      </GroupHeader>
      <Grid
        displayedContent='track'
        items={items.tracks.items}
      />
    </Wrapper>
  )
}

const GroupHeader = styled.h4`
  color: #f1f1f1;
  border-bottom: 1px solid #757575;
  padding-bottom: 6px;
  margin-bottom: 4px;
`

const Wrapper = styled.div`
  height: calc(100% - 50px);
  overflow: scroll;
`

SearchResults.propTypes = {
  items: PropTypes.object
}

export default SearchResults
