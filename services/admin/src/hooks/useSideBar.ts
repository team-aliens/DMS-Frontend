import { removeCookies } from '@/utils/cookies';
import { pagePath } from '@/utils/pagePath';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/useModal';

export const useSidebar = () => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
};
