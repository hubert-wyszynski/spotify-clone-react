import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Album from 'views/Album/Album'
import Browse from 'views/Browse/Browse'
import CategoryPlaylists from 'views/CategoryPlaylists/CategoryPlaylists'
import NewReleases from 'views/NewReleases/NewReleases'
import Playlist from 'views/Playlist/Playlist'

const MainContent = () => (
  <MainContentWrapper>
    <Switch>
      <Route path='/releases' component={NewReleases} />
      <Route path='/browse/:id' component={CategoryPlaylists} />
      <Route path='/browse' component={Browse} />
      <Route path='/playlist/:id' component={Playlist} />
      <Route path='/album/:id' component={Album} />
    </Switch>
  </MainContentWrapper>
)

const MainContentWrapper = styled.div`
  background: rgb(87,87,87);
  /* background: linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(66,66,66,1) 35%, rgba(36,36,36,1) 100%); */
  background: linear-gradient(180deg,rgb(56, 56, 56) 0%,rgb(39, 39, 39) 35%,rgb(25,25,25) 100%);
  height: 100%;
  padding: 55px 14px 0;
  width: calc(100% - 200px);
  position: relative;
`

export default MainContent
