import React from 'react'

import styled from 'styled-components'

import TopBar from 'components/TopBar/TopBar'
import BottomBar from 'components/BottomBar/BottomBar'
import SideBar from 'components/SideBar/SideBar'
import MainContent from 'components/MainContent/MainContent'

const AppWrapper = () => (
  <Desktop>
    <AppWindow>
      <TopBar />
      <ContentWrapper>
        <SideBar />
        <MainContent />
      </ContentWrapper>
      <BottomBar />
    </AppWindow>
  </Desktop>
)

export default AppWrapper

const Desktop = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  height: calc(100% - 72px);
`

const AppWindow = styled.div`
  background-color: white;
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