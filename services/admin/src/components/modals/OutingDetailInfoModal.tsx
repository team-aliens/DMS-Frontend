import { Button, Modal, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { OutingInfoWrapper } from '../outings/OutingDataInfo';
import { OutingStudentList } from '../main/DetailBox/OutingStudentList';
import { useModal } from '@/hooks/useModal';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useOutingApplicationDetail } from '@/hooks/useOutingApi';
import { Dispatch, SetStateAction } from 'react';

interface PropsType {
  tagColor: string;
  tagBackGroundColor: string;
  text: string;
}

export function OutingDetailInfoModal({
  tagColor,
  tagBackGroundColor,
  text,
}: PropsType) {
  const { closeModal, selectModal } = useModal();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: outingDetailInfo } = useOutingApplicationDetail(id);

  const openDoneModal = () => {
    closeModal();
    selectModal('DONE_MODAL');
  };

  const onClick = () => {
    navigate('/outing');
    closeModal();
  };

  return (
    <Modal
      title="외출 상세 정보"
      content=""
      close={onClick}
      buttonList={[
        outingDetailInfo?.outing_status === 'DONE' ? (
          <Button onClick={onClick} color="primary">
            확인
          </Button>
        ) : (
          <>
            <Button onClick={openDoneModal} color="primary">
              복귀
            </Button>
            <Button onClick={onClick} color="primary">
              확인
            </Button>
          </>
        ),
      ]}
    >
      <OutingInfoContainer>
        <OutingInfoWrapper
          tagColor={tagColor}
          tagBackGroundColor={tagBackGroundColor}
          text={text}
          detailInfoData={outingDetailInfo}
        />
      </OutingInfoContainer>
      <Text size="bodyM" color="gray6">
        외출자
      </Text>
      <_OutingStudentListWrapper>
        <OutingStudentList detailInfoData={outingDetailInfo} />
      </_OutingStudentListWrapper>
      <div>
        <Text size="bodyM" color="gray6">
          사유
        </Text>
        <ReasonWrapper>{outingDetailInfo?.reason}</ReasonWrapper>
      </div>
    </Modal>
  );
}

const _OutingStudentListWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: inline-block;
  overflow: scroll;
  height: 150px;
`;

const OutingInfoContainer = styled.div`
  margin-bottom: 15px;
`;

const ReasonWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid var(--Sys-Light-Line, #eee);
  background: var(--Sys-Light-Surface, #fff);
  height: 140px;
  width: 100%;
  resize: none;
  padding: 15px 15px;
`;
