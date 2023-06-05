import { useModal } from '@/hooks/useModal';
import { Modal, Button } from '@team-aliens/design-system';

interface PropsType {
  onClick: () => void;
}

export function DeleteStudentModal({ onClick }: PropsType) {
  const { closeModal } = useModal();

  return (
    <Modal
      content="학생을 삭제 하시겠습니까?"
      close={closeModal}
      buttonList={[
        <Button onClick={closeModal} kind="outline" color="gray">
          취소
        </Button>,
        <Button className="modalButton" color="error" onClick={onClick}>
          확인
        </Button>,
      ]}
    />
  );
}
