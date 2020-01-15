import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styled from 'styled-components'

import GridItem from 'components/GridItem/GridItem'

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
      content && content.items &&
        <Grid>
          {
            content.items.map(item => (
              <GridItem
                item={item}
                key={item.id}
              />
            ))
          }
        </Grid>
    }
  </MainContentWrapper>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px 16px;
  height: calc(100% - 64px);
  overflow: scroll;
  padding: 20px 0; 
`

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
