import { ToastContainer, ToastProvider } from '@team-aliens/design-system';
import { Router } from './router';
import { useModal } from './hooks/useModal';
import { useEffect, Suspense } from 'react';
import { pagePath } from 'c:/Project/DMS-Frontend/packages/utils/src/pagePath';
import { Outlet, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './style/globalStyle';
import { eventBus } from 'c:/Project/DMS-Frontend/packages/utils/src/eventBus';
import { ToastHandler } from './components/ToastHandler';

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
      <ToastHandler />
      <ToastContainer zIndex={20} />
      <Outlet />
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={Router} />
      </Suspense>
    </ToastProvider>
  );
}
