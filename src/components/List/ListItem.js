import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { playTrack } from 'actions/player'

const ListItem = ({
  item,
  index,
  playTrack
}) => (
  <Item
    onClick={() => playTrack(item)}
  >
    <Index>
      {index + 1}
    </Index>
    <Title>
      {item.name}
    </Title>
    {item.artists &&
      <Artist>
        {[...item.artists.map(artist => artist.name)].join(', ')}
      </Artist>}
  </Item>
)

const Item = styled.li`
  align-items: center;
  border-bottom: 1px solid #676767;
  cursor: pointer;
  display: flex;
  height: 40px;
  padding: 0 0 0 14px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #545454;
  }
`

const Artist = styled.p`
  color: #efefef;
  font-size: 1.2rem;
`

const Title = styled.p`
  color: #efefef;
  font-size: 1.2rem;
  width: 330px;
`

const Index = styled.p`
  font-size: 1.2rem;
  color: #8c8c8c;
  width: 50px;
`

const mapDispatchToProps = {
  playTrack
}

ListItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object,
  playTrack: PropTypes.func
}

export default connect(null, mapDispatchToProps)(ListItem)
