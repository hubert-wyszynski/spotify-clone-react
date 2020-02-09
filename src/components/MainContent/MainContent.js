import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Album from 'content/Album/Album'
import Browse from 'content/BrowseCategories/Browse'
import CategoryPlaylists from 'content/CategoryPlaylists/CategoryPlaylists'
import NewReleases from 'content/NewReleases/NewReleases'
import Playlist from 'content/Playlist/Playlist'
import SearchResults from 'content/SearchResults/SearchResults'

const MainContent = () => (
  <MainContentWrapper>
    <Switch>
      <Route path='/releases' component={NewReleases} />
      <Route path='/browse/:id' component={CategoryPlaylists} />
      <Route path='/browse' component={Browse} />
      <Route path='/playlist/:id' component={Playlist} />
      <Route path='/album/:id' component={Album} />
      <Route path='/search' component={SearchResults} />
    </Switch>
  </MainContentWrapper>
)

const MainContentWrapper = styled.div`
  background: rgb(87,87,87);
  background: linear-gradient(180deg,rgb(56, 56, 56) 0%,rgb(39, 39, 39) 35%,rgb(25,25,25) 100%);
  height: 100%;
  padding: 55px 14px 0;
  width: calc(100% - 200px);
  position: relative;
`

export default MainContent
