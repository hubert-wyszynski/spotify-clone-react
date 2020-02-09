import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Album from 'components/content/Album/Album'
import Browse from 'components/content/BrowseCategories/Browse'
import CategoryPlaylists from 'components/content/CategoryPlaylists/CategoryPlaylists'
import NewReleases from 'components/content/NewReleases/NewReleases'
import Playlist from 'components/content/Playlist/Playlist'
import SearchResults from 'components/content/SearchResults/SearchResults'

const ContentWrapper = () => (
  <Wrapper>
    <Switch>
      <Route path='/releases' component={NewReleases} />
      <Route path='/browse/:id' component={CategoryPlaylists} />
      <Route path='/browse' component={Browse} />
      <Route path='/playlist/:id' component={Playlist} />
      <Route path='/album/:id' component={Album} />
      <Route path='/search' component={SearchResults} />
    </Switch>
  </Wrapper>
)

const Wrapper = styled.div`
  background: rgb(87,87,87);
  background: linear-gradient(180deg,rgb(56, 56, 56) 0%,rgb(39, 39, 39) 35%,rgb(25,25,25) 100%);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 55px 14px 0;
  width: calc(100% - 200px);
  position: relative;
`

export default ContentWrapper
