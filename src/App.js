import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import { createGlobalStyle } from 'styled-components'

import Login from 'components/Login/Login'
import AppWrapper from 'components/AppWrapper/AppWrapper'

import { setToken } from 'actions/token'

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

class App extends React.Component {
  componentDidMount () {
    const _token = hash.access_token
    if (_token) {
      this.props.setToken(_token)
    }
  }

  render () {
    return (
      <div>
        <GlobalStyle />
        {!this.props.token && (
          <Login />
        )}
        {
          this.props.token && (
            <AppWrapper />
          )
        }
      </div>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700&display=swap');

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
    margin: 0;
  }

  i {
    font-family: 'FontAwesome' !important;
    font-style: normal;
  }
`

const mapStateToProps = ({ token }) => {
  return token
}

const mapDispatchToProps = {
  setToken
}

App.propTypes = {
  setToken: PropTypes.func,
  token: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
