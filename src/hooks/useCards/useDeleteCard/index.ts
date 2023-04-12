import { api } from 'api/client';
import { useMutation } from 'react-query';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

interface DeleteCardInput {
  userId: any;
  cardNumber: number;
}

export async function deleteCard(input: DeleteCardInput) {
  try {
    const { userId, cardNumber } = input;
    await api.delete(`/accounts/${userId}/cards/${cardNumber}`);
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
}

export function useDeleteCard() {
  return useMutation(deleteCard);
}
