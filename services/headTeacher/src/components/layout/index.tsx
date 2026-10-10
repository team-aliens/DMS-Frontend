import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import { useAuth } from '@/hooks/useAuth';
import { Sidebar } from './Sidebar';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  const { logOut } = useAuth();

  return (
    <_Layout>
      <Sidebar onLogout={logOut} />
      <_Content>{children}</_Content>
    </_Layout>
  );
};

const _Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: ${theme.teacherColor.gray[100]};
`;

const _Content = styled.main`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 140px 136px 0;
`;

export const _PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const _PageTitle = styled.h1`
  ${theme.font.headlineL};
  color: ${theme.teacherColor.gray[600]};
`;

/** 페이지 헤더는 그대로 두고 표만 스크롤되도록 감싼다 */
export const _TableScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-bottom: 80px;
  border-radius: 24px 24px 0 0;
`;

export const _Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
