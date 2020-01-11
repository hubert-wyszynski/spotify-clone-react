import React from 'react'

import styled from 'styled-components'

const MainContent = () => (
  <MainContentWrapper>
    This is main content
  </MainContentWrapper>
)

const MainContentWrapper = styled.div`
  background: rgb(87,87,87);
  background: linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(66,66,66,1) 35%, rgba(36,36,36,1) 100%);
  height: 100%;
  padding: 60px 18px 0;
  width: calc(100% - 200px);
`

export default MainContent
