import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import H1 from 'components/shared/H1/H1'
import H3 from 'components/shared/H3/H3'
import Grid from 'components/shared/Grid/Grid'
import GridItem from 'components/shared/GridItem/GridItem'
import Spinner from 'components/shared/Spinner/Spinner'

import { fetchNewReleases } from 'store/actions/releases'

const NewReleases = ({
  fetchNewReleases,
  items,
  isLoading,
  match
}) => {
  useEffect(() => {
    fetchNewReleases()
  }, [match.url])

  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <>
            <H1>New releases</H1>
            <H3>The best new releases</H3>
            <Grid spaced>
              {
                items &&
                items.map(item => (
                  <GridItem
                    spaced
                    cover={item.images[0].url}
                    item={item}
                    key={item.id}
                    linkTo={`album/${item.id}`}
                    title={item.name}
                    subtitle={[...item.artists.map(artist => artist.name)].join(', ')}
                  />
                ))
              }
            </Grid>
          </>
        )
      }
    </>
  )
}

const mapDispatchToProps = {
  fetchNewReleases
}

const mapStateToProps = (state) => {
  const { releases } = state
  return {
    items: releases.items,
    isLoading: releases.pending
  }
}

NewReleases.propTypes = {
  fetchNewReleases: PropTypes.func,
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases)
