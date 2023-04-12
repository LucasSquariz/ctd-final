import { useMutation } from 'react-query';

import { api } from 'api/client';
import { Deposit, Data } from './types';

export const useDepositRequest = async (account_id: string, props: Data) => {
  try {
    const { data } = await api.post(`/accounts/${account_id}/deposits`, props);
    return data as Deposit;
  } catch (err) {
    return Promise.reject(err);
  }
};

export function useDeposit(account_id: string) {
  return useMutation((props: Data) => useDepositRequest(account_id, props));
}
