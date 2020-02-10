import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'components/shared/Spinner/Spinner'

const LoaderProvider = ({ isLoading, children }) => (
  <>
    {
      isLoading ? (
        <Spinner />
      ) : (
        <>
          {children}
        </>
      )
    }
  </>
)

LoaderProvider.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.array
}

export default LoaderProvider
