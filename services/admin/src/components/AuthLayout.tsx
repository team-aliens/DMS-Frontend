import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '@/utils/cookies';
import { pagePath } from '@/utils/pagePath';

const PUBLIC_PATHS: string[] = [
  pagePath.login,
  pagePath.findAccountId,
  pagePath.resetPassword,
];

export const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const accessToken = getCookie('access_token');
    if (!accessToken && !PUBLIC_PATHS.includes(pathname)) {
      navigate(pagePath.login, { replace: true });
    }
  }, [pathname, navigate]);

  return <Outlet />;
};
