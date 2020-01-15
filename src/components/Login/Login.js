import React from 'react'

import styled from 'styled-components'

const Login = () => (
  <LoginWrapper>
    <Button
      href='https://accounts.spotify.com/authorize?client_id=e16950aeeea44756a756cb657f6f9661&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000'
    >
      Sign in
    </Button>
  </LoginWrapper>
)

const LoginWrapper = styled.div`
  align-items: center;
  background-color: #313131;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

const Button = styled.a`
  background-color: #1db954;
  border-radius: 24px;
  color: #fff;
  padding: 12px 24px;
  text-decoration: none;
`

export default Login
