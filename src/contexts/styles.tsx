import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global-styles';
import theme from '../styles/theme';

export function StyledProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
