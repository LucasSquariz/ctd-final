import { api } from 'api/client';
import { useQuery } from 'react-query';
import { UserPayload } from './types';

export const QUERY_KEY_USER_BY_ID = 'QUERY_KEY_USER_BY_ID';

const getUserById = async (id: number) => {
  try {
    if (!id) {
      return;
    }
    const { data } = await api.get<UserPayload>(`/users/${id}`);

    return data as UserPayload;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export const useGetUserById = (id: number) => {
  return useQuery(QUERY_KEY_USER_BY_ID, () => getUserById(id));
};
