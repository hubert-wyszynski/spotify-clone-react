import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCategory } from 'actions/category'

import styled from 'styled-components'

const MainContent = ({ fetchCategory, categories }) => (
  <MainContentWrapper>
    {
      (categories && categories.items) && categories.items.map(cat => (
        <CategoryThumbnail
          key={cat.id}
        >
          <CategoryImage
            src={cat.icons[0].url}
          />
          <CategoryTitle>
            {cat.name}
          </CategoryTitle>
        </CategoryThumbnail>
      ))
    }
  </MainContentWrapper>
)

const MainContentWrapper = styled.div`
  background: rgb(87,87,87);
  background: linear-gradient(180deg, rgba(87,87,87,1) 0%, rgba(66,66,66,1) 35%, rgba(36,36,36,1) 100%);
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: scroll;
  padding: 60px 18px 0;
  width: calc(100% - 200px);
`

const CategoryImage = styled.img`
  width: 200px;
  height: 200px;
`

const CategoryThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

const CategoryTitle = styled.h3`
  color: white;
`

const mapStateToProps = ({ token, categories }) => {
  return {
    token: token.token,
    categories: categories.categories
  }
}

const mapDispatchToProps = {
  fetchCategory
}

MainContent.propTypes = {
  categories: PropTypes.object,
  fetchCategory: PropTypes.func
  // token: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
