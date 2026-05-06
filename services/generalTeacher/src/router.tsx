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
    ],
  },
]);
