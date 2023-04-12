import {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

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

  .cardQR {
  width: 290px;
  height: 354px;
  background: #07182E;
  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
}

.cardQR h2 {
  z-index: 1;
  color: white;
  font-size: 2em;
}

.videoQR {
  width: 210px;
  height: 310px;
  border-radius: 20px;
  z-index: 8;
}

.cardQR::before {
  content: '';
  position: absolute;
  width: 100px;
  background-image: linear-gradient(180deg, rgb(193 253 53),rgb(193 253 53));
  height: 130%;
  animation: rotBGimg 3s linear infinite;
  transition: all 0.2s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.cardQR::after {
  content: '';
  position: absolute;
  background: #07182E;
  ;
  inset: 5px;
  border-radius: 15px;
} 

.videoM{
  display: none;
}

@media (max-width: 600px)
{
  .videoM{
  display: flex;
}
  video {
    display: none;
   }

   .css-1mb7ygz-MuiTypography-root {
    width: 56%;
    font-size: 1.6rem;
   }
   .css-a39hbi {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;

   } 
   .css-17da7sq {
    width: 80%;
    border-radius: 14px;
   }
   .css-410c6i-MuiTypography-root {
    font-size: 1.1rem;
    padding: 10px 0px 3px 0px;
   }
   
   .css-1i2ohw2-MuiTypography-root {
    font-size: 0.8rem;
   }
   .css-a39hbi {
    height: 1px;
   }
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
