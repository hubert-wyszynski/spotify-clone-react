import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from 'views/primary/Login/Login'
import AppWrapper from 'views/primary/App/App'
import GlobalStyle from 'theme/GlobalStyle'

import { setToken } from 'store/actions/token'

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
    }
    return initial
  }, {})
window.location.hash = ''

class Root extends React.Component {
  componentDidMount () {
    const _token = hash.access_token
    if (_token) {
      this.props.setToken(_token)
    }
  }

  render () {
    return (
      <>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/' component={AppWrapper} />
          </Switch>
          {
            this.props.token ? (
              <Redirect to='/browse' />
            ) : (
              <Redirect to='/login' />
            )
          }
        </BrowserRouter>
      </>
    )
  }
}

const mapStateToProps = ({ token }) => {
  return token
}

const mapDispatchToProps = {
  setToken
}

Root.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
