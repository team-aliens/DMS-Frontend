import { removeCookies } from '@/utils/cookies';
import { pagePath } from '@/utils/pagePath';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const logOut = () => {
    removeCookies(['refresh_token', 'access_token', 'service']);
    navigate(pagePath.login);
  };

  return {
    logOut,
  };
};
