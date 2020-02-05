import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from 'components/Grid/Grid'

const NewReleases = ({
  items
}) => (
  <p>NewReleases</p>
)

const mapStateToProps = (state) => {
  const { categories } = state
  return {
    items: categories.items
  }
}

NewReleases.propTypes = {
  items: PropTypes.array
}

export default connect(mapStateToProps)(NewReleases)
