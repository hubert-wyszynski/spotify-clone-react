import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Grid from 'components/Grid/Grid'
import List from 'components/List/List'

const MainContent = ({
  content,
  currentContent
}) => (
  <MainContentWrapper>
    {
      currentContent &&
        <Header>
          {currentContent.header}
        </Header>
    }
    {
      content && content.items && (
        currentContent.display === 'grid' ? (
          <Grid items={content.items} />
        ) : (
          <List items={content.items} />
        )
      )
    }
  </MainContentWrapper>
)

const Header = styled.h2`
  color: white;
  margin: 0 0 20px;
  font-size: 3rem;
`

const MainContentWrapper = styled.div`
  background: rgb(87,87,87);
  background: linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(66,66,66,1) 35%, rgba(36,36,36,1) 100%);
  height: 100%;
  padding: 55px 18px 0;
  width: calc(100% - 200px);
`

const mapStateToProps = (state) => {
  const { currentContent } = state

  return {
    currentContent,
    content: state[currentContent.data]
  }
}

MainContent.propTypes = {
  content: PropTypes.object,
  currentContent: PropTypes.object
}

export default connect(mapStateToProps)(MainContent)
