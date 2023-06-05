import { useModal } from '@/hooks/useModal';
import { Button, Modal } from '@team-aliens/design-system';

interface PropsType {
  onClick: () => void;
}

export function DeletePointListModal({ onClick }: PropsType) {
  const { closeModal } = useModal();

  const confirm = () => {
    onClick();
    closeModal();
  };

  return (
    <Modal
      className="modalButton"
      close={closeModal}
      content="상/벌점 내역을 취소 하시겠습니까?"
      buttonList={[
        <Button
          className="modalButton"
          onClick={closeModal}
          kind="outline"
          color="gray"
        >
          취소
        </Button>,
        <Button
          className="modalButton"
          onClick={confirm}
          kind="contained"
          color="error"
        >
          확인
        </Button>,
      ]}
    />
  );
}
