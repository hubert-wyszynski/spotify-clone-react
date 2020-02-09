import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,600,700&display=swap');

  @import '../node_modules/font-awesome/scss/font-awesome.scss';

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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

export default GlobalStyle
