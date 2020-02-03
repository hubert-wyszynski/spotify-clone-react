import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Spinner = ({ text }) => (
  <SpinnerWrapper>
    <SpinnerAnimation />
    {
      text &&
        <Text>Loading...</Text>
    }
  </SpinnerWrapper>
)

const SpinnerAnimation = styled.div`
  @keyframes donut-spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.22);
  border-left-color: #bfbfbf;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
`

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  left: 0;
`

const Text = styled.p`
  font-size: 1.4rem;
  color: #bfbfbf;
  font-weight: 300;
  margin-bottom: 0;
`

Spinner.propTypes = {
  text: PropTypes.bool
}

Spinner.defaultProps = {
  text: true
}

export default Spinner
