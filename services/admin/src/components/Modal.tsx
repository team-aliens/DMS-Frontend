import { Modal } from '@team-aliens/design-system';
import { useModal } from '@/hooks/useModal';

export const GlobalModal = () => {
  const { modalState, closeModal } = useModal();
  const { title, content, onClose, inputs, buttons, isOpened, children } =
    modalState;
  const close = () => {
    closeModal();
    onClose();
  };

  return (
    isOpened && (
      <Modal
        title={title}
        content={content}
        close={close}
        inputList={inputs || []}
        buttonList={buttons || []}
      >
        {children}
      </Modal>
    )
  );
};
