import { authApi } from '@/api-client';
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

  async function login() {
    await authApi.login({
      username: 'test1',
      password: '12312312',
    });
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
