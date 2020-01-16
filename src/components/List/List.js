import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import ListItem from 'components/List/ListItem'

const List = ({ items }) => (
  <>
    <Header>
      <HeaderElement width={50}>#</HeaderElement>
      <HeaderElement width={330}>Title</HeaderElement>
      <HeaderElement>Artist</HeaderElement>
    </Header>
    <ListWrapper>
      {
        items.map((item, index) => {
          const i = item.track ? item.track : item

          return (
            <ListItem
              item={i}
              index={index}
              key={i.id}
            />
          )
        })
      }
    </ListWrapper>
  </>
)

const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid #676767;
  display: flex;
  height: 40px;
  padding: 0 0 0 14px;
`

const HeaderElement = styled.div`
  color: #a2a2a2;
  font-size: 1.1rem;
  width: ${({ width }) => width ? `${width}px` : 'auto'};
`

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  overflow: scroll;
  height: calc(100% - 100px);
  margin: 0;
`

List.propTypes = {
  items: PropTypes.array
}

export default List
