import React from 'react'

import styled from 'styled-components'

import TopBar from 'components/TopBar/TopBar'
import BottomBar from 'components/BottomBar/BottomBar'
import SideBar from 'components/SideBar/SideBar'
import ContentWrapper from 'components/ContentWrapper/ContentWrapper'

const App = () => (
  <Desktop>
    <AppWindow>
      <TopBar />
      <Content>
        <SideBar />
        <ContentWrapper />
      </Content>
      <BottomBar />
    </AppWindow>
  </Desktop>
)

export default App

const Desktop = styled.div`
  align-items: center;
  background-color: #2a3a5f;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
`

const Content = styled.div`
  display: flex;
  height: calc(100% - 72px);
`

const AppWindow = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 940px;
  max-height: 700px;
  overflow: hidden;
  position: relative;
  width: 100%;
`
