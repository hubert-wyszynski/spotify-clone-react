import React , { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { searchForItems } from '../../actions/search'

const Search = ({
  searchForItems
}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query !== '') searchForItems(query)
  }, [query])

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const clearInput = () => {
    setQuery('')
  }

  return (
    <>
      <SearchWrapper>
        <Icon
          className='fa fa-search'
        />
        <Input
          placeholder='Search'
          onChange={(e) => handleInputChange(e)}
          value={query}
        />
        {
          query &&
            <RemoveIcon
              className='fas fa-times-circle'
              onClick={clearInput}
            />
        }
      </SearchWrapper>
    </>
  )
}

const SearchWrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  padding: 0 0 0 12px;
`

const Icon = styled.i`
  align-items: center;
  background-color: #fbfbfb;
  border-radius: 14px 0 0 14px;
  border: 1px solid #cccccc;
  border-right: 0;
  color: #b3b3b3;
  display: flex;
  font-size: 12px;
  height: 28px;
  padding: 0 4px;
`

const Input = styled.input`
  background-color: #fbfbfb;
  border: 1px solid #cccccc;
  border-left: 0;
  border-radius: 0 14px 14px 0;
  color: #b3b3b3;
  font-size: 12px;
  height: 28px;
  padding-right: 23px;

  &::placeholder {
    color: #b3b3b3;
    font-weight: 400;
  }

  &:focus {
    outline: none;
  }
`

const RemoveIcon = styled.i`
  color: #b3b3b3;
  cursor: pointer;
  position: absolute;
  right: 6px;
`

const mapDispatchToProps = {
  searchForItems
}

Search.propTypes = {
  searchForItems: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Search)
