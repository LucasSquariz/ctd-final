import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './auth/AuthProvider';
import { ToastContainer } from 'react-toastify';

import { StyledProvider } from './styles';
import { useHasMounted } from 'hooks/useHasMounted';

export function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [queryClient] = useState(() => new QueryClient());

  const { hasMounted } = useHasMounted();

  if (!hasMounted) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastContainer />
        <StyledProvider>{children}</StyledProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
