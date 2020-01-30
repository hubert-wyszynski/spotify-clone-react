import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Grid from 'components/Grid/Grid'
import List from 'components/List/List'
import SearchResults from 'components/SearchResults/SearchResults'
import Spinner from 'components/Spinner/Spinner'

const MainContent = ({
  displayedContent,
  header,
  isDataLoading,
  items,
  layout
}) => (
  <MainContentWrapper>
    {
      isDataLoading ? (
        <Spinner />
      ) : (
        <>
          <Header>
            {header}
          </Header>
          {
            (() => {
              switch (layout) {
                case 'grid':
                  return <Grid
                    displayedContent={displayedContent}
                    fixedHeight
                    items={items}
                  />
                case 'list':
                  return <List items={items} />
                case 'mixed':
                  return <SearchResults items={items} />
                default:
                  return null
              }
            })()
          }
        </>
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
  position: relative;
`

const mapStateToProps = (state) => {
  const { header, items, layout, type } = state.currentContent

  return {
    displayedContent: type,
    header: header,
    isDataLoading: state.loaders.isDataLoading,
    items: items,
    layout: layout
  }
}

MainContent.propTypes = {
  displayedContent: PropTypes.string,
  header: PropTypes.string,
  isDataLoading: PropTypes.bool,
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  layout: PropTypes.string
}

export default connect(mapStateToProps)(MainContent)
