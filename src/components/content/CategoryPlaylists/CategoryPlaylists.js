import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCategoryPlaylists } from 'store/actions/categories'

import LoaderProvider from 'providers/LoaderProvider'

import H1 from 'components/shared/H1/H1'
import Grid from 'components/shared/Grid/Grid'
import GridItem from 'components/shared/GridItem/GridItem'

const CategoryPlaylists = ({
  fetchCategoryPlaylists,
  items,
  isLoading,
  match
}) => {
  useEffect(() => {
    fetchCategoryPlaylists(match.params.id)
  }, [match.url])

  return (
    <LoaderProvider isLoading={isLoading}>
      <H1>Playlists:</H1>
      <Grid>
        {
          items &&
          items.map(item => (
            <GridItem
              cover={item.images[0].url}
              item={item}
              key={item.id}
              linkTo={`/playlist/${item.id}`}
              title={item.name}
              subtitle={item.description}
            />
          ))
        }
      </Grid>
    </LoaderProvider>
  )
}

const mapDispatchToProps = {
  fetchCategoryPlaylists
}

const mapStateToProps = (state) => {
  const { category } = state

  return {
    items: category.items,
    isLoading: category.pending
  }
}

CategoryPlaylists.propTypes = {
  fetchCategoryPlaylists: PropTypes.func,
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPlaylists)
