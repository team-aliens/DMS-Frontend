import { ToastContainer, ToastProvider } from '@team-aliens/design-system';
import { Router } from './router';
import { useModal } from './hooks/useModal';
import { useEffect, Suspense } from 'react';
import { pagePath } from './utils/pagePath';
import { Outlet, RouterProvider } from 'react-router-dom';
import { PointListProvider } from './context/pointHistoryList';
import { GlobalStyle } from './style/globalStyle';
import { eventBus } from './utils/eventBus';

export function App() {
  const { modalState } = useModal();

  useEffect(() => {
    const handleSessionExpired = () => {
      if (window.location.pathname !== pagePath.login) {
        window.location.href = pagePath.login;
      }
    };
    eventBus.on('sessionExpired', handleSessionExpired);
    return () => {
      eventBus.off('sessionExpired', handleSessionExpired);
    };
  }, []);

  useEffect(() => {
    if (modalState.selectedModal) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [modalState.selectedModal]);

  return (
    <ToastProvider>
      <PointListProvider>
        <ToastContainer zIndex={20} />
        <Outlet />
        <GlobalStyle />
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={Router} />
        </Suspense>
      </PointListProvider>
    </ToastProvider>
  );
}
