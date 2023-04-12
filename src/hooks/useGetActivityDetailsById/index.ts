import { api } from 'api/client';
import { useQuery } from 'react-query';
import { ActivityTypes } from './types';

export const QUERY_KEY_ACTIVITY_DETAILS_BY_USER_ID = 'QUERY_KEY_ACTIVITY_DETAILS_BY_USER_ID';

const getActivityDetailsById = async (accountId: string,  transactionId: string) => {
  try {
    const { data } = await api.get<ActivityTypes>(
      `/accounts/${accountId}/transactions/${transactionId}`
    );
    return data as ActivityTypes;
  } catch (err: any) {
    console.error(err);
  }
};

function useGetActivityDetailsById(accountId: string, transactionId: string) {
  return useQuery(QUERY_KEY_ACTIVITY_DETAILS_BY_USER_ID, () =>
    getActivityDetailsById(accountId, transactionId)
  );
}

export default useGetActivityDetailsById;
