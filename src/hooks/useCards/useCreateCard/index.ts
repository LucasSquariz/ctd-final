import { api } from 'api/client';
import { useMutation } from 'react-query';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

interface CreateCardInput {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
  focus: string;
}

export async function createCard(input: any) {  
  try {
    console.log(input)
    await api.post(`/accounts/${input.userId}/cards/`, {
      cod: input?.input?.cvc,
      expiration_date: input?.input?.expiry,
      first_last_name: input?.input?.name,
      number_id: input?.input?.number
    });
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useCreateCard() {
  return useMutation(createCard);
}
