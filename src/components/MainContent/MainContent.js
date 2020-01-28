import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styled from 'styled-components'

import Grid from 'components/Grid/Grid'
import List from 'components/List/List'

const MainContent = ({
  header,
  isDataLoading,
  items,
  layout
}) => (
  <MainContentWrapper>
    {
      header &&
        <Header>
          {header}
        </Header>
    }

    {
      isDataLoading ? (
        <div>
          <p>Data is loading...</p>
        </div>
      ) : (
        (() => {
          switch (layout) {
            case 'grid':
              return <Grid items={items} />
            case 'list':
              return <List items={items} />
            default:
              return null
          }
        })()
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
  const { header, items, layout } = state.currentContent

  return {
    header: header,
    isDataLoading: state.loaders.isDataLoading,
    items: items,
    layout: layout
  }
}

MainContent.propTypes = {
  header: PropTypes.string,
  isDataLoading: PropTypes.bool,
  items: PropTypes.array,
  layout: PropTypes.string
}

export default connect(mapStateToProps)(MainContent)
