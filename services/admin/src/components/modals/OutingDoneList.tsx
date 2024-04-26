import { useModal } from '@/hooks/useModal';
import { Button, Modal } from '@team-aliens/design-system';
import { updateOutingApplicationStatus } from '@/apis/outing';
import { useParams } from 'react-router-dom';
import { fetchOutingApplicationDetail } from '@/apis/outing';
import { useEffect, useState } from 'react';
import { OutingApplicationDetailResponse } from '@/apis/outing/response';

export function OutingDoneList() {
  const { closeModal } = useModal();
  const { id } = useParams();
  const [outingDetail, setOutingDetail] =
    useState<OutingApplicationDetailResponse | null>(null);

  const fetchOutingDetail = async () => {
    const data = await fetchOutingApplicationDetail(id);
    setOutingDetail(data);
  };
  useEffect(() => {
    fetchOutingDetail();
  }, [id]);

  const handleStatus = async () => {
    await updateOutingApplicationStatus(id, 'DONE');
    closeModal();
  };

  return (
    <Modal
      className="modalButton"
      close={closeModal}
      content={
        outingDetail
          ? `${outingDetail.student_name} 외 ${outingDetail.students.length}명의 ${outingDetail.outing_type} (${outingDetail.outing_time} ~ ${outingDetail.arrival_time})을 복귀 처리하시겠습니까?`
          : ''
      }
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
