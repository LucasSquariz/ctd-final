import { useMutation } from 'react-query';

import { api } from 'api/client';
import { AuthUserInput } from 'contexts/auth/types';

export async function signIn({ email, password }: AuthUserInput) {
  try {
    const { data } = await api.post('/login', {
      email,
      password
    });

    return data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export function useSignIn() {
  return useMutation(signIn);
}
