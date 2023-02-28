import type { AppProps } from 'next/app';
import React from 'react';
import DrawerAppBar from "./home";

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
