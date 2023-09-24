import { getTokenFromCookies, setAuthTokens } from '@/logic/auth-logic';
import { useSidebarMenuStore } from '@/store/sidebarStore';
import { useMediaQuery } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuthAccesToken } from './react-query/auth.hooks';
import { updateCredentials } from '@/store/authStore';

export function useAdminProviders() {
  const opened = useSidebarMenuStore(state => state.opened);
  const hide = useSidebarMenuStore(state => state.hide);
  const updateIsLargeScreen = useSidebarMenuStore(state => state.updateIsLargeScreen);
  const { mutate: authToken, data: userData, isSuccess: authIsSuccess } = useAuthAccesToken();

  const [isLargeScreen] = useMediaQuery('(min-width: 1024px)', {
    ssr: true,
    fallback: true,
  });

  useEffect(() => {
    const token = getTokenFromCookies();
    setAuthTokens(token);
    authToken();
  }, []);

  useEffect(() => {
    // * Hide the drawer if opened
    updateIsLargeScreen(isLargeScreen);
    if (isLargeScreen && opened) hide();
  }, [isLargeScreen, opened]);

  useEffect(() => {
    if (!authIsSuccess || !userData) return;
    updateCredentials(userData);
  }, [authIsSuccess]);
}
