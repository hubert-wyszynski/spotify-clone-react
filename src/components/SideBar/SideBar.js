import React from 'react'
import PropTypes from 'prop-types'

import { fetchCategories } from 'actions/categories'
import { fetchNewReleases } from 'actions/releases'

import { connect } from 'react-redux'

import styled from 'styled-components'

const SideBar = ({ fetchCategories, fetchNewReleases }) => {
  return (
    <SideBarWrapper>
      <SidebarElement onClick={fetchCategories}>
        Categories
      </SidebarElement>
      <SidebarElement onClick={fetchNewReleases}>
        New releases
      </SidebarElement>
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

const SidebarElement = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #989898;
  display: block;
  font-size: 1.4rem;
  margin: 0 0 8px;
  padding: 0;

  &:hover {
    color: #fff;
  }

  &:focus {
    outline: none;
  }
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
