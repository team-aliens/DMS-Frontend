import { useEffect } from 'react';
import { useToast } from '@/hooks/useToast';
import { eventBus, ToastEvent } from '@/utils/eventBus';

export const ToastHandler = () => {
  const { toastDispatch } = useToast();

  useEffect(() => {
    const handleShowToast = (e: ToastEvent) => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: e.type,
        message: e.message,
      });
    };

    eventBus.on('showToast', handleShowToast);
    return () => {
      eventBus.off('showToast', handleShowToast);
    };
  }, [toastDispatch]);

  return null;
};
