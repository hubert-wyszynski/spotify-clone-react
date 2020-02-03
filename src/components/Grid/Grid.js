import React from 'react'
import PropTypes from 'prop-types'

import GridItem from 'components/Grid/GridItem'

import styled from 'styled-components'

const Grid = ({ displayedContent, items, fixedHeight }) => (
  <GridWrapper fixedHeight={fixedHeight}>
    {
      items.map(item => (
        <GridItem
          displayedContent={displayedContent}
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
  height: ${({ fixedHeight }) => fixedHeight ? 'calc(100% - 64px)' : 'auto'};
  overflow: scroll;
  padding: 20px 0;
`

Grid.propTypes = {
  displayedContent: PropTypes.string,
  fixedHeight: PropTypes.bool,
  items: PropTypes.array
}

Grid.defaultProps = {
  fixedHeight: false
}

export default Grid
