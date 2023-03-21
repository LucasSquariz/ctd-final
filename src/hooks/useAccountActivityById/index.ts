import { api } from 'api/client';
import { useQuery } from 'react-query';
import { ActivityTypes } from './types';

export const QUERY_KEY_ACTIVITY_BY_USER_ID = 'QUERY_KEY_ACTIVITY_BY_USER_ID';

const getAccountActivityById = async (id: number) => {
  try {
    const { data } = await api.get<ActivityTypes>(`/accounts/${id}/activity`);    
    return data as ActivityTypes;
  } catch (err: any) {
    console.error(err);
  }
};

function useGetAccountActivityById(id: number) {
  return useQuery(QUERY_KEY_ACTIVITY_BY_USER_ID, () =>
    getAccountActivityById(id)
  );
}

export default useGetAccountActivityById;
