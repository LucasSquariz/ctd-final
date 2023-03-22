import { STORAGE } from 'constants/storage';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';

export function withSSRAuth<P extends { [key: string]: any }>(
  fn: GetServerSideProps<P>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);

    const token = cookies[STORAGE.TOKEN_KEY];

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }

    try {
      return await fn(ctx);
    } catch {
      destroyCookie(ctx, STORAGE.TOKEN_KEY);
      destroyCookie(undefined, STORAGE.USER_STORAGE_KEY);

      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }
  };
}
