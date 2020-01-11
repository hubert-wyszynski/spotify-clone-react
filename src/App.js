import React from 'react'

import styled, { createGlobalStyle } from 'styled-components'

import TopBar from 'components/TopBar/TopBar'
import BottomBar from 'components/BottomBar/BottomBar'
import SideBar from 'components/SideBar/SideBar'
import MainContent from 'components/MainContent/MainContent'

const App = () => (
  <div>
    <GlobalStyle />
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
  </div>
)

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap');

  @import '../node_modules/font-awesome/scss/font-awesome.scss';

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }

  i {
    font-family: 'FontAwesome' !important;
    font-style: normal;
  }
`

const Desktop = styled.div`
  align-items: center;
  background-color: #f1f1f1;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
`

const ContentWrapper = styled.div`
  background-color: pink;
  display: flex;
  height: calc(100% - 72px);
`

const AppWindow = styled.div`
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1000px;
  max-height: 700px;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export default App
