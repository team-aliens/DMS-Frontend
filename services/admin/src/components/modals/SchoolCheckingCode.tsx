import { useModal } from '@/hooks/useModal';
import { Button, Modal } from '@team-aliens/design-system';

interface PropsType {
  onClick: () => void;
}

export function SchoolCheckingCodeModal({ onClick }: PropsType) {
  const { closeModal } = useModal();

  const confirm = () => {
    onClick();
    closeModal();
  };

  return (
    <Modal
      close={closeModal}
      content="확인코드를 새로 발급하시겠습니까?"
      buttonList={[
        <Button onClick={closeModal} kind="outline" color="gray">
          취소
        </Button>,
        <Button onClick={confirm} kind="contained" color="error">
          확인
        </Button>,
      ]}
    />
  );
}
