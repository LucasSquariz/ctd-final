import { useMutation } from 'react-query';

import { api } from 'api/client';
import { User } from './types';

export const userUpdateRequest = async (user_id: string, user: User) => {
  try {
    const { data } = await api.patch(`/users/${user_id}`, user);
    return data as User;
  } catch (err) {
    return Promise.reject(err);
  }
};

export function useUpdateUser(user_id: string) {
  return useMutation((user: User) => userUpdateRequest(user_id, user));
}
