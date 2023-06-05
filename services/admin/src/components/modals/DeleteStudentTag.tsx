import { useModal } from '@/hooks/useModal';
import { Modal, Button } from '@team-aliens/design-system';

interface PropsType {
  onClick: () => void;
}

export function DeleteStudentTagModal({ onClick }: PropsType) {
  const { closeModal } = useModal();

  const confirmDeleteStudentTag = () => {
    onClick();
    closeModal();
  };

  return (
    <Modal
      content="해당 학생 태그를 삭제 하시겠습니까?"
      close={close}
      buttonList={[
        <Button onClick={closeModal} kind="outline" color="gray">
          취소
        </Button>,
        <Button
          className="modalButton"
          color="error"
          onClick={confirmDeleteStudentTag}
        >
          확인
        </Button>,
      ]}
    />
  );
}
