import React from 'react'

import Dots from './Dots'
import Search from './Search'
import User from './User'

import styled from 'styled-components'

const TopBar = () => (
  <TopBarWrapper>
    <Dots />
    <Search />
    <User />
  </TopBarWrapper>
)

const TopBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 46px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`

export default TopBar
