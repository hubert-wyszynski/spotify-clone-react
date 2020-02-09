import React from 'react'

import styled from 'styled-components'

import SideBarItem from './SideBarItem'

const SideBar = () => (
  <SideBarWrapper>
    <NavItemsWrapper>
      <SideBarItem
        label='Browse'
        linkTo='/browse'
      />
      <SideBarItem
        label='New releases'
        linkTo='/releases'
      />
    </NavItemsWrapper>
  </SideBarWrapper>
)

const SideBarWrapper = styled.div`
  background-color: #151515;
  height: 100%;
  padding: 60px 0 0;
  width: 200px;
  color: white;
`

const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default SideBar
