import React from 'react'
import styled from 'styled-components'

import Categories from 'views/Categories/Categories'
import Browse from 'views/Browse/Browse'

import { Switch, Route } from 'react-router-dom'

const MainContent = () => (
  <MainContentWrapper>
    <Switch>
      <Route path='/categories' component={Categories} />
      <Route path='/browse' component={Browse} />
    </Switch>
  </MainContentWrapper>
)

const MainContentWrapper = styled.div`
  background: rgb(87,87,87);
  background: linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(66,66,66,1) 35%, rgba(36,36,36,1) 100%);
  height: 100%;
  padding: 55px 18px 0;
  width: calc(100% - 200px);
  position: relative;
`

export default MainContent
