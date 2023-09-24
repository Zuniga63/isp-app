import { clearAuthToken, saveAuthToken } from '@/logic/auth-logic';
import { IUser } from '@/types';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

interface IAuthState {
  isAuth: boolean;
  user?: IUser;
  isAdmin: boolean;
}

export const useLoginStore = createWithEqualityFn<IAuthState>(
  () => ({
    isAuth: false,
    isAdmin: false,
    user: undefined,
  }),
  shallow,
);

export const saveCredentials = ({ user, token }: { user: IUser; token: string }) => {
  saveAuthToken(token);
  return useLoginStore.setState(() => ({ user, isAuth: true, isAdmin: user.isAdmin }));
};

export const clearCredentials = () => {
  clearAuthToken();
  return useLoginStore.setState(() => ({ user: undefined, isAuth: false, isAdmin: false }));
};
