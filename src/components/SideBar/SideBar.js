import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SideBarItem from './SideBarItem'

import { fetchCategories } from 'actions/categories'
import { fetchNewReleases } from 'actions/releases'

const SideBar = ({
  fetchCategories,
  fetchNewReleases
}) => {
  return (
    <SideBarWrapper>
      <NavItemsWrapper>
        <SideBarItem
          label='Browse'
          linkTo='/browse'
          clickHandler={fetchCategories}
        />
        <SideBarItem
          label='New releases'
          linkTo='/releases'
          clickHandler={fetchNewReleases}
        />
      </NavItemsWrapper>
    </SideBarWrapper>
  )
}

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

const mapDispatchToProps = {
  fetchCategories,
  fetchNewReleases
}

SideBar.propTypes = {
  fetchCategories: PropTypes.func,
  fetchNewReleases: PropTypes.func
}

export default connect(null, mapDispatchToProps)(SideBar)
