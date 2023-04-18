import { GetServerSidePropsContext } from 'next';
import axios, { AxiosError } from 'axios';

import { parseCookies } from 'nookies';
import { error as notifyError } from 'helpers/notify/error';
import { STORAGE } from 'constants/storage';
import { logOut } from 'helpers/logOut';

export type ErrorResponse = {
  error: string;
  statusCode: number;
};

export function setupApiClient(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ctx: GetServerSidePropsContext | undefined = undefined
) {
  let cookies = parseCookies();

  const token = cookies[STORAGE.TOKEN_KEY];

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST
  });

  api.defaults.headers.common.Authorization = `${token}`;
  api.interceptors.request.use(
    config => {
      cookies = parseCookies(ctx);

      api.defaults.headers.common.Authorization = `${
        cookies[STORAGE.TOKEN_KEY]
      }`;

      return config;
    },

    error => Promise.reject(error)
  );

  api.interceptors.response.use(
    response => response,
    (error: AxiosError<ErrorResponse>) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

      if (!expectedError && error?.response?.status !== 401) {
        notifyError('Encontramos um problema por aqui.');
      }

      if (error?.response?.status === 401) {
        if (error.response.data.error.includes('token is expired by')) {
          logOut();
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
