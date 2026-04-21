import { SelectedModalType, useModalStore } from '@/store/useModalStore';

export const useModal = () => {
  const { selectedModal, selectModal, closeModal } = useModalStore();

  return {
    modalState: { selectedModal },
    selectModal,
    closeModal,
  };
};

export type { SelectedModalType };
