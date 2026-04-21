import mitt from 'mitt';
import { ToastType } from '@team-aliens/design-system';

export interface ToastEvent {
  message: string;
  type: ToastType;
}

type Events = {
  sessionExpired: void;
  showToast: ToastEvent;
};

export const eventBus = mitt<Events>();
