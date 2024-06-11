import { deleteOutingApplicationTime } from '@/apis/outing';
import { useToast } from '@/hooks/useToast';
import { Button, Modal } from '@team-aliens/design-system';

interface DeleteOutingTimeProps {
  outingAvailableTimeId: string;
  closeModal: () => void;
}

export default function DeleteOutingTime({
  outingAvailableTimeId,
  closeModal,
}: DeleteOutingTimeProps) {
  const { toastDispatch } = useToast();

  const onDelete = () => {
    deleteOutingApplicationTime(outingAvailableTimeId)
      .then(() => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '외출 시간이 성공적으로 삭제되었습니다.',
        });
        closeModal();
      })
      .catch(() => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '외출 시간 삭제에 실패했습니다.',
        });
      });
  };

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
        <Button
          onClick={onDelete}
          className="modalButton"
          kind="contained"
          color="error"
        >
          확인
        </Button>,
      ]}
    />
  );
}
