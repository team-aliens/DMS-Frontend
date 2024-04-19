import { useModal } from '@/hooks/useModal';
import { Button, Modal } from '@team-aliens/design-system';
import { updateOutingApplicationStatus } from '@/apis/outing';
import { useParams, useNavigate } from 'react-router-dom';
import { useOutingApplicationDetail } from '@/hooks/useOutingApi';

export function OutingDoneList() {
  const { closeModal } = useModal();
  const { id } = useParams();

  /**
   * TODO 외출자 이름 및 시간 수정 필요
   */
  const handleStatus = async () => {
    try {
      await updateOutingApplicationStatus(id, 'DONE');
      closeModal();
    } catch (error) {
      console.error('외출 상태 변경 에러: ', error);
    }
  };

  return (
    <Modal
      className="modalButton"
      close={closeModal}
      content="김은빈 외 6명의 식사외출 (00:00 ~ 00:00)을 복귀 처리하시겠습니까?"
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
          onClick={handleStatus}
          kind="contained"
          color="primary"
        >
          확인
        </Button>,
      ]}
    />
  );
}