import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const ListItem = ({ item }) => (
  <Wrapper
    key={item.id}
  >
    <Title>
      {item.name}
    </Title>
    {item.artists &&
      <Artist>
        {[...item.artists.map(artist => artist.name)].join(', ')}
      </Artist>}
  </Wrapper>
)

const Wrapper = styled.li`
  cursor: pointer;
`

const Artist = styled.h4`
  color: #989898;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`

const Title = styled.h3`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
  margin: 12px 0 6px;
`

ListItem.propTypes = {
  item: PropTypes.object
}

export default ListItem
