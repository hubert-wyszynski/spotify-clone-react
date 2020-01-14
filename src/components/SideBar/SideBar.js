import React from 'react'
import PropTypes from 'prop-types'

import { fetchCategories } from 'actions/categories'

import { connect } from 'react-redux'

import styled from 'styled-components'

const SideBar = ({ fetchCategories, token }) => (
  <SideBarWrapper>
    <p onClick={() => fetchCategories(token)}>Categories</p>
  </SideBarWrapper>
)

const SideBarWrapper = styled.div`
  background-color: #151515;
  height: 100%;
  padding: 60px 12px 0;
  width: 200px;
  color: white;
`

const mapStateToProps = ({ token }) => {
  return token
}

const mapDispatchToProps = {
  fetchCategories
}

SideBar.propTypes = {
  fetchCategories: PropTypes.func,
  token: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
