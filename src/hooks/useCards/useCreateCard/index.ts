import { api } from 'api/client';
import { useMutation } from 'react-query';

interface CustomError extends Error {
  response?: {
    data: {
      error: string;
    };
  };
}

interface CreateCard {
  cod: number;
  expiration_date: string;
  first_last_name: string;
  number_id: number;
}

export interface Data {
  account_id: number;
  cod: number;
  expiration_date: string;
  first_last_name: string;
  id: number;
  number_id: number;
}

export const createCardRequest = async (
  account_id: string,
  createCard: CreateCard
) => {
  try {
    const { data } = await api.post(
      `/accounts/${account_id}/cards`,
      createCard
    );
    return data as Data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      const err: CustomError = e;
      const errorResponse = err.response?.data.error;
      return Promise.reject(errorResponse ?? e);
    }
  }
};

export function useCreateCard(account_id: string) {
  return useMutation((createCard: CreateCard) =>
    createCardRequest(account_id, createCard)
  );
}
