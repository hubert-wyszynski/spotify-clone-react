import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import TracksListItem from 'components/shared/TracksList/TracksListItem'

const TracksList = ({ items }) => (
  <>
    <Header>
      <HeaderElement width={50}>#</HeaderElement>
      <HeaderElement width={330}>Title</HeaderElement>
      <HeaderElement>Artist</HeaderElement>
    </Header>
    <ItemsWrapper>
      {
        items
          .filter(item => item.track !== null && item.preview !== null)
          .map((item, index) => {
            const i = item.track ? item.track : item

            return (
              <TracksListItem
                item={i}
                index={index}
                key={i.id}
              />
            )
          })
      }
    </ItemsWrapper>
  </>
)

const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid #676767;
  display: flex;
  height: 40px;
  padding: 20px 0 20px 14px;
  margin-top: 8px;
`

const HeaderElement = styled.div`
  color: #a2a2a2;
  font-size: 1.1rem;
  width: ${({ width }) => width ? `${width}px` : 'auto'};
`

const ItemsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  overflow: scroll;
  margin: 0;
  padding-bottom: 16px;
`

TracksList.propTypes = {
  items: PropTypes.array
}

export default TracksList
