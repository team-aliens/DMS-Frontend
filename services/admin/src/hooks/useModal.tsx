import { useContext } from 'react';
import {
  ModalDispatchContext,
  ModalRenderState,
  ModalStateContext,
} from '@/context/modal';

export const useModal = () => {
  const modalState = useContext(ModalStateContext);
  const modalDispatch = useContext(ModalDispatchContext);

  const renderModal = (state: ModalRenderState) => {
    modalDispatch({
      type: 'RENDER',
      contents: state,
    });
  };

  const closeModal = () => {
    modalDispatch({
      type: 'CLOSE',
    });
  };

  return {
    modalState,
    renderModal,
    closeModal,
  };
};
