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
  const [outingDetail, setOutigDetail] =
    useState<OutingApplicationDetailResponse | null>(null);

  useEffect(() => {
    const fetchOutingDetail = async () => {
      try {
        const data = await fetchOutingApplicationDetail(id);
        setOutigDetail(data);
      } catch (error) {
        console.error('외출 상세 정보 가져오기 에러: ', error);
      }
    };
    fetchOutingDetail();
  }, [id]);

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
      content={
        outingDetail
          ? `${outingDetail.student_name}외 ${outingDetail.students.length}명의 ${outingDetail.outing_type} (${outingDetail.outing_time} ~ ${outingDetail.arrival_time})을 복귀 처리하시겠습니까?`
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
