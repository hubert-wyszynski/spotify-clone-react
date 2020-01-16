import React from 'react'
import PropTypes from 'prop-types'

import GridItem from 'components/Grid/GridItem'

import styled from 'styled-components'

const Grid = ({ items }) => (
  <GridWrapper>
    {
      items.map(item => (
        <GridItem
          item={item}
          key={item.id}
        />
      ))
    }
  </GridWrapper>
)

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px 16px;
  height: calc(100% - 64px);
  overflow: scroll;
  padding: 20px 0; 
`

Grid.propTypes = {
  items: PropTypes.array
}

export default Grid
