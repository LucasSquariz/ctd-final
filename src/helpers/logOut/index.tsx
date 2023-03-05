import Router from 'next/router';
import { destroyCookie } from 'nookies';

import { STORAGE } from 'constants/storage';

export function logOut() {
  destroyCookie(undefined, STORAGE.TOKEN_KEY);
  destroyCookie(undefined, STORAGE.USER_STORAGE_KEY);

  Router.push('/login');
}
