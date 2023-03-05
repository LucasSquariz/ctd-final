import { Dispatch, SetStateAction } from 'react';

export type AuthUserInput = {
  email: string;
  password: string;
};

export type ModelUser = {
  alias: string;
  available_amount: string;
  cvu: string;
  id: string;
  user_id: number;
};

export interface AuthStateContextData {
  user: ModelUser;
  isAuthenticated: boolean;
  loading: boolean;
  emailUser: string;
}

export interface AuthDispatchContextData {
  signIn: (credentials: AuthUserInput) => void;
  signOut: () => void;
  setEmailUser: Dispatch<SetStateAction<string>>;
}
