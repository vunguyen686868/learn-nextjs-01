import { authApi } from '@/api-client';
import { LoginPayload } from '@/models';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/_internal';

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, //1hr
    revalidateOnFocus: false,
    ...options,
  });

  console.log({ profile, error });
  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);
    await mutate(); //reload profile url
  }

  async function logout() {
    await authApi.logout();
    await mutate({}, false); //clear
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
