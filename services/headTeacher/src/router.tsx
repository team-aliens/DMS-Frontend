import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'study-apply',
        children: [
          {
            path: '/approved',
          },
          {
            path: '/rejected',
          },
        ],
      },
      {
        path: '/login',
      },
    ],
  },
]);
