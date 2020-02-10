import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCategories } from 'store/actions/categories'

import LoaderProvider from 'providers/LoaderProvider'

import H1 from 'components/shared/H1/H1'
import H3 from 'components/shared/H3/H3'
import Grid from 'components/shared/Grid/Grid'
import GridItem from 'components/shared/GridItem/GridItem'

const Browse = ({
  fetchCategories,
  isLoading,
  items,
  match
}) => {
  useEffect(() => {
    fetchCategories()
  }, [match.url])

  return (
    <LoaderProvider isLoading={isLoading}>
      <H1>Browse</H1>
      <H3>Genres & moods</H3>
      <Grid>
        {
          items &&
          items.map(item => (
            <GridItem
              cover={item.icons[0].url}
              item={item}
              key={item.id}
              linkTo={`browse/${item.id}`}
              titleCentered
              title={item.name}
            />
          ))
        }
      </Grid>
    </LoaderProvider>
  )
}

const mapDispatchToProps = {
  fetchCategories
}

const mapStateToProps = (state) => {
  const { categories } = state
  return {
    items: categories.items,
    isLoading: categories.pending
  }
}

Browse.propTypes = {
  fetchCategories: PropTypes.func,
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
