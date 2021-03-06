import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { getUser } from 'store/actions/user'

class User extends React.Component {
  componentDidMount () {
    const { getUser, token } = this.props

    if (token) {
      getUser()
    }
  }

  render () {
    const { user } = this.props
    return (
      <UserWrapper>
        {
          user &&
            <>
              <Name>
                {user.data.display_name}
              </Name>
              {
                user.data.images.length &&
                  <Photo src={user.data.images[0].url} />
              }
            </>
        }
      </UserWrapper>
    )
  }
}

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
`

const Name = styled.p`
  font-size: 1.2rem;
  color: white;
  margin: 0;
`

const Photo = styled.img`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0 8px 0;
`

const mapStateToProps = (state) => {
  const { user, token } = state
  return {
    token: token.token,
    user: user.user
  }
}

const mapDispatchToProps = {
  getUser
}

User.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object,
  token: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
