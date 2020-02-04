import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <SideBarWrapper>
      <NavLink to='/browse'>Browse</NavLink>
      <NavLink to='/categories'>Categories</NavLink>
    </SideBarWrapper>
  )
}

const SideBarWrapper = styled.div`
  background-color: #151515;
  height: 100%;
  padding: 60px 12px 0;
  width: 200px;
  color: white;
`

export default SideBar
