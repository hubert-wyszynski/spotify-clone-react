import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Spinner from 'components/shared/Spinner/Spinner'

const Cover = ({
  img,
  hoverEffect,
  size
}) => {
  const [isImageLoaded, setImageState] = useState(false)

  const handleImageLoad = () => {
    setImageState(true)
  }

  return (
    <>
      <Image
        src={img}
        onLoad={() => handleImageLoad()}
        loaded={isImageLoaded}
        size={size}
        hoverEffect={hoverEffect}
      />
      {
        !isImageLoaded &&
          <SpinnerWrapper>
            <Spinner
              text={false}
            />
          </SpinnerWrapper>
      }
    </>
  )
}

const Image = styled.img`
  width: 100%;
  display: ${({ loaded }) => loaded ? 'block' : 'none'};

  &:hover {
    filter: brightness(0.3);
  }

  ${({ size }) => (
    size && css`
      width: ${size}px;
      height: ${size}px;
    `
  )}

  ${({ hoverEffect }) => (
    !hoverEffect && css`
      &:hover {
        filter: unset;
      }
    `
  )}
`

const SpinnerWrapper = styled.div`
  background-color: #5f5f5f;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

Cover.propTypes = {
  img: PropTypes.string,
  size: PropTypes.number,
  hoverEffect: PropTypes.bool
}

Cover.defaultProps = {
  hoverEffect: true
}

export default Cover
