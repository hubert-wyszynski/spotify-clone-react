import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchCategoryPlaylists } from 'store/actions/categories'

import H1 from 'components/shared/H1/H1'
import Grid from 'components/shared/Grid/Grid'
import GridItem from 'components/shared/GridItem/GridItem'

const CategoryPlaylists = ({
  fetchCategoryPlaylists,
  items,
  match
}) => {
  useEffect(() => {
    fetchCategoryPlaylists(match.params.id)
  }, [match.url])

  return (
    <>
      <H1>Playlist name</H1>
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
    </>
  )
}

const mapDispatchToProps = {
  fetchCategoryPlaylists
}

const mapStateToProps = (state) => ({
  items: state.category.items
})

CategoryPlaylists.propTypes = {
  fetchCategoryPlaylists: PropTypes.func,
  items: PropTypes.array,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPlaylists)
