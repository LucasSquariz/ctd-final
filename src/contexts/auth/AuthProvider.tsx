import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { destroyCookie, setCookie } from 'nookies';
import { useLocalStorage } from '@rehooks/local-storage';

import router from 'next/router';

import { STORAGE } from 'constants/storage';

import { logOut } from 'helpers/logOut';

import { AuthDispatchProvider, AuthStateProvider } from './AuthContext';
import { AuthUserInput, ModelUser } from './types';
import { api } from 'api/client';
import { useSignIn } from 'hooks/useSignIn';

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const { mutateAsync: signInMutate, isLoading: loading } = useSignIn();
  const [emailUser, setEmailUser] = useState('');

  const [user, setUser, deleteUser] = useLocalStorage<ModelUser>(
    STORAGE.USER_STORAGE_KEY,
    {} as ModelUser
  );
  const isAuthenticated = !!user;

  useEffect(() => {
    authChannel = new BroadcastChannel(`auth`);

    authChannel.onmessage = message => {
      switch (message.data) {
        case `logOut`:
          logOut();
          break;
        default:
          break;
      }
    };
  }, []);

  const handleSignIn = useCallback(
    ({ email, password }: AuthUserInput) => {
      signInMutate(
        { email, password },
        {
          onSuccess: data => {
            const { token } = data;

            setCookie(undefined, STORAGE.TOKEN_KEY, token, {
              maxAge: 60 * 60 * 24 * 30,
              path: '/'
            });

            async function getAccount() {
              const { data } = await api.get<ModelUser>('/account');
              if (data) {
                setUser(data);
              }
              return data as ModelUser;
            }

            api.defaults.headers.common.Authorization = `${token}`;

            getAccount();

            router.push('/inicio');
          }
        }
      );
    },
    [signInMutate, setUser]
  );

  const signOut = useCallback(() => {
    deleteUser();
    destroyCookie(undefined, STORAGE.TOKEN_KEY);
    destroyCookie(undefined, STORAGE.USER_STORAGE_KEY);

    router.push('/login');
  }, [deleteUser]);

  const authState = useMemo(
    () => ({
      isAuthenticated,
      user,
      loading,
      emailUser
    }),
    [isAuthenticated, user, loading]
  );

  const authDispatch = useMemo(
    () => ({
      signIn: handleSignIn,
      signOut,
      setEmailUser
    }),
    [handleSignIn, signOut]
  );

  return (
    <AuthStateProvider value={authState}>
      <AuthDispatchProvider value={authDispatch}>
        {children}
      </AuthDispatchProvider>
    </AuthStateProvider>
  );
}
