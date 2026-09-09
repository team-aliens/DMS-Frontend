import { createBrowserRouter, Navigate } from 'react-router-dom';
import { pagePath } from '@/utils/pagePath';
import { AuthLayout } from './components/AuthLayout';
import { DaybreakListPage } from './pages/DaybreakListPage';
import { ApprovalPage } from './pages/ApprovalPage';
import { TeacherLoginPage } from './pages/LoginPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: pagePath.home,
        element: <Navigate to={pagePath.daybreak.list} replace />,
      },
      { path: pagePath.login, element: <TeacherLoginPage /> },
      { path: pagePath.daybreak.list, element: <DaybreakListPage /> },
      { path: pagePath.daybreak.approval, element: <ApprovalPage /> },
    ],
  },
]);
