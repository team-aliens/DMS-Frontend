import { createBrowserRouter } from 'react-router-dom';
import { pagePath } from '@/utils/pagePath';
import { AuthLayout } from './components/AuthLayout';
import { TeacherPage } from './pages/index';
import { TeacherLoginPage } from './pages/LoginPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: pagePath.home,
        element: <TeacherPage viewType="ALL" />,
      },
      { path: pagePath.login, element: <TeacherLoginPage /> },
      {
        path: pagePath.daybreak.approved,
        element: <TeacherPage viewType="APPROVED" />,
      },
      {
        path: pagePath.daybreak.rejected,
        element: <TeacherPage viewType="REJECTED" />,
      },
    ],
  },
]);
