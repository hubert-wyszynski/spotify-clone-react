import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SideBarItem from './SideBarItem'

import { fetchCategories } from 'actions/categories'

const SideBar = ({
  fetchCategories
}) => {
  return (
    <SideBarWrapper>
      <NavItemsWrapper>
        <SideBarItem
          label='Categories'
          linkTo='/categories'
          onClick={() => fetchCategories()}
        />
        <SideBarItem
          label='Browse'
          linkTo='/browse'
          onClick={() => fetchCategories()}
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
  fetchCategories
}

SideBar.propTypes = {
  fetchCategories: PropTypes.func
}

export default connect(null, mapDispatchToProps)(SideBar)
