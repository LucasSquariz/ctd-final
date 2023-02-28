import {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from 'styled-components';

import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html,  body {
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
   
  }
  a {
    text-decoration: none;
  }
   /* remove arrow button from input name Chrome, Safari, Edge, Opera */
   input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  ${({ theme }) => css`
    body {
      height: auto;
      font-size: '14px';
      color: ${({ theme }) => theme.colors.black};
      background: ${({ theme }) => theme.colors.background};
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`;

export default GlobalStyles;
