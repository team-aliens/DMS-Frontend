import { useModal } from '@/hooks/useModal';
import { Button, Modal } from '@team-aliens/design-system';

export default function DeleteOutingTime() {
  const { closeModal } = useModal();

  return (
    <Modal
      className="modalButton"
      close={closeModal}
      content={'외출 시간을 삭제하시겠습니까?'}
      buttonList={[
        <Button
          className="modalButton"
          onClick={closeModal}
          kind="outline"
          color="gray"
        >
          취소
        </Button>,
        <Button className="modalButton" kind="contained" color="primary">
          확인
        </Button>,
      ]}
    />
  );
}
