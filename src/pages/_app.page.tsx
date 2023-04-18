import type { AppProps } from 'next/app';
import React from 'react';
import { AppProvider } from 'contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
