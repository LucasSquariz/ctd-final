import { GetServerSidePropsContext } from 'next';
import axios from 'axios';

import { parseCookies } from 'nookies';

import { STORAGE } from 'constants/storage';

export function setupApiClient(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ctx: GetServerSidePropsContext | undefined = undefined
) {
  const cookies = parseCookies();

  const token = cookies[STORAGE.TOKEN_KEY];

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST
  });

  api.defaults.headers.common.Authorization = `${token}`;

  return api;
}
