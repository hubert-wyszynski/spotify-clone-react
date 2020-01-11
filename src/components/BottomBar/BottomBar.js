import React from 'react'

import styled from 'styled-components'

const BottomBar = () => (
  <BottomBarWrapper>
    Bottom bar
  </BottomBarWrapper>
)

const BottomBarWrapper = styled.div`
  background-color: #313131;
  bottom: 0;
  height: 72px;
  position: absolute;
  width: 100%;
`

export default BottomBar
