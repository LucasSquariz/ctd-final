/* eslint-disable prefer-destructuring */
import { api } from 'api/client';
import { ModelUser } from 'contexts/auth/types';
import { useQuery } from 'react-query';

export const QUERY_ACCOUNT_KEY = 'QUERY_ACCOUNT_KEY';

export async function getAccount() {
  const { data } = await api.get('/account');

  return data as ModelUser;
}

export function useGetAccount(onSuccess: (activity: any) => void) {
  return useQuery({
    queryKey: QUERY_ACCOUNT_KEY,
    queryFn: () => getAccount(),
    onSuccess: onSuccess    
  });
}
