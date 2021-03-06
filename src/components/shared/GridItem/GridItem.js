import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import Cover from 'components/shared/Cover/Cover'

const GridItem = ({
  cover,
  linkTo,
  title,
  titleCentered,
  spaced,
  subtitle
}) => {
  return (
    <Link to={linkTo}>
      <Wrapper
        spaced={spaced}
      >
        <Cover
          img={cover}
          size={spaced && 94}
        />
        <InfoWrapper
          spaced={spaced}
        >
          <Title
            titleCentered={titleCentered}
          >
            {title.length < 30 ? title : `${title.slice(0, 30)}...`}
          </Title>
          {
            subtitle &&
              <Subtitle>
                {subtitle.length < 45 ? subtitle : `${subtitle.slice(0, 45)}...`}
              </Subtitle>
          }
        </InfoWrapper>
      </Wrapper>
    </Link>
  )
}

const InfoWrapper = styled.div`
  padding-left: ${({ spaced }) => spaced ? '12px' : 0}
`

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 18px;

  ${({ spaced }) => (
    spaced && css`
      flex-direction: row;
    `
  )}
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
  word-break: break-word;

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
  cover: PropTypes.string,
  linkTo: PropTypes.string,
  title: PropTypes.string,
  titleCentered: PropTypes.bool,
  spaced: PropTypes.bool,
  subtitle: PropTypes.string
}

export default GridItem
