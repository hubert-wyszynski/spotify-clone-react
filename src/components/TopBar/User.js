import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { getUser } from 'actions/user'

class User extends React.Component {
  componentDidMount () {
    const { getUser } = this.props
    getUser()
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
              <Photo src={user.data.images[0].url} />
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
  const { user } = state
  return {
    user: user.user
  }
}

const mapDispatchToProps = {
  getUser
}

User.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
