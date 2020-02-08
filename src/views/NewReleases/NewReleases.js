import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GridItem from 'components/Grid/GridItem'

import { fetchNewReleases } from 'actions/releases'

const NewReleases = ({
  fetchNewReleases,
  items,
  match
}) => {
  useEffect(() => {
    fetchNewReleases()
  }, [match.url])

  return (
    <>
      <Header>New releases</Header>
      <Subheader>The best new releases</Subheader>
      <ItemsWrapper>
        {
          items &&
          items.map(item => (
            <GridItem
              cover={item.images[0].url}
              item={item}
              key={item.id}
              linkTo={`album/${item.id}`}
              title={item.name}
              subtitle={[...item.artists.map(artist => artist.name)].join(', ')}
            />
          ))
        }
      </ItemsWrapper>
    </>
  )
}

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 18px;
  overflow: scroll;
  height: calc(100% - 122px);
`

const Header = styled.h1`
  color: #fff;
  margin: 0 0 12px;
  font-size: 3.8rem;
`

const Subheader = styled.h2`
  color: #fff;
  margin: 0 1px 16px;
  font-size: 1.4rem;
  font-weight: 400;
  border-bottom: 1px solid #717171;
  padding-bottom: 12px;
`

const mapDispatchToProps = {
  fetchNewReleases
}

const mapStateToProps = (state) => {
  const { releases } = state
  return {
    items: releases.items
  }
}

NewReleases.propTypes = {
  fetchNewReleases: PropTypes.func,
  items: PropTypes.array,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(NewReleases)
