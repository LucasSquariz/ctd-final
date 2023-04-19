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
  } catch (err:any) {
    console.log(err);
  }
}

export function useSignIn() {
  return useMutation(signIn);
}
