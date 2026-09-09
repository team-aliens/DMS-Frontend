import styled from 'styled-components';
import { NavigatorBar } from '@team-aliens/design-system';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import LogoutIcon from '../../assets/logout.svg';

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar = ({ onLogout }: SidebarProps) => {
  return (
    <>
      <NavigatorBar variant="teacher" navList={['새벽자습', '승인/반려']} />
      <_LogoutButton onClick={onLogout}>
        <img src={LogoutIcon} alt="로그아웃" width={40} height={40} />
        로그아웃
      </_LogoutButton>
    </>
  );
};

const _LogoutButton = styled.button`
  position: fixed;
  left: 30px;
  bottom: 50px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  ${theme.font.headlineS};
  color: ${theme.teacherColor.gray[600]};
`;
