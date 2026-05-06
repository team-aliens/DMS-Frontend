import { removeCookies } from '@/utils/cookies';
import { pagePath } from '@/utils/pagePath';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/useModal';

export const useAuth = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const logOut = () => {
    removeCookies(['refresh_token', 'access_token', 'service']);
    navigate(pagePath.login);
    closeModal();
  };

  return {
    logOut,
  };
};
