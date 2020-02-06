import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import Cover from 'components/Cover/Cover'

const GridItem = ({
  clickHandler,
  clickHandlerParams,
  cover,
  item,
  linkTo,
  title,
  titleCentered,
  subtitle
}) => {
  return (
    <Link to={linkTo}>
      <Wrapper
        onClick={() => clickHandler(...clickHandlerParams)}
      >
        <Cover
          img={cover}
        />
        <Title
          titleCentered={titleCentered}
        >
          {title}
        </Title>
        {/* {item.artists &&
          <Artist>
            {[...item.artists.map(artist => artist.name)].join(', ')}
          </Artist>} */}
        {
          subtitle &&
            <Subtitle>
              {subtitle.length < 45 ? subtitle : `${subtitle.slice(0, 45)}...`}
            </Subtitle>
        }
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Subtitle = styled.h4`
  color: #989898;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  overflow-wrap: break-word;
  max-width: 150px;
`

const Title = styled.h3`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 6px 0 4px;

  ${({ titleCentered }) => {
    if (titleCentered) {
      return (
        css`
          position: absolute;
          width: 100%;
          text-align: center;
          bottom: 26px;
          font-size: 1.4rem;
        `
      )
    }
  }}
`

GridItem.propTypes = {
  clickHandler: PropTypes.func,
  clickHandlerParams: PropTypes.array,
  cover: PropTypes.string,
  item: PropTypes.object,
  linkTo: PropTypes.string,
  title: PropTypes.string,
  titleCentered: PropTypes.bool,
  subtitle: PropTypes.string
}

export default GridItem
