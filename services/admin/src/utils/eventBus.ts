import mitt from 'mitt';

type Events = {
  sessionExpired: void;
};

export const eventBus = mitt<Events>();
