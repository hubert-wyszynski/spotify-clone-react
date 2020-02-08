import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fetchCategories } from 'actions/categories'

import GridItem from 'components/Grid/GridItem'

const Browse = ({
  fetchCategories,
  items,
  match
}) => {
  useEffect(() => {
    fetchCategories()
  }, [match.url])

  return (
    <>
      <Header>Browse</Header>
      <Subheader>Genres & moods</Subheader>
      <ItemsWrapper>
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
  fetchCategories
}

const mapStateToProps = (state) => {
  const { categories } = state
  return {
    items: categories.items
  }
}

Browse.propTypes = {
  fetchCategories: PropTypes.func,
  items: PropTypes.array,
  match: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
