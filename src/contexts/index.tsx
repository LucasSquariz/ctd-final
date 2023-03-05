import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './auth/AuthProvider';
import { ToastContainer } from 'react-toastify';

import { StyledProvider } from './styles';

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer />
        <StyledProvider>{children}</StyledProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
