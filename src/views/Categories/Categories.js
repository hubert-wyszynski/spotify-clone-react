import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Grid from 'components/Grid/Grid'

const Categories = ({
  items
}) => (
  <>
    <Grid
      items={items}
    />
  </>
)

const mapStateToProps = (state) => {
  const { categories } = state
  return {
    items: categories.items
  }
}

Categories.propTypes = {
  items: PropTypes.array
}

export default connect(mapStateToProps)(Categories)
