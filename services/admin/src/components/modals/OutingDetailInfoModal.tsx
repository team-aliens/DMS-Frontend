import { Button, Modal, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { OutingInfoWrapper } from '../outings/OutingDataInfo';
import { OutingStudentList } from '../main/DetailBox/OutingStudentList';
import { useEffect, useState } from 'react';
import { OutingStatusType, updateOutingApplicationStatus } from '@/apis/outing';
import { useModal } from '@/hooks/useModal';
import { SelectedModalType } from '@/context/modal';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  useOutingApplicationDetail,
  useOutingApplications,
} from '@/hooks/useOutingApi';

interface PropsType {
  tagColor: string;
  tagBackGroundColor: string;
  text: string;
  SelectedModalType?: SelectedModalType;
}

export function OutingDetailInfoModal({
  tagColor,
  tagBackGroundColor,
  text,
}: PropsType) {
  const { closeModal, selectModal, modalState } = useModal();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: outingDetailInfo } = useOutingApplicationDetail(id);

  const handleStatus = async () => {
    try {
      await updateOutingApplicationStatus(id, 'DONE');
      closeModal();
    } catch (error) {
      console.error('외출 상태 변경 에러: ', error);
    }
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
            <Button onClick={handleStatus} color="primary">
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
      <_OutingReasonWrapper>
        <Text size="bodyM" color="gray6">
          사유
        </Text>
        <ReasonWrapper>{outingDetailInfo?.reason}</ReasonWrapper>
      </_OutingReasonWrapper>
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

const _OutingReasonWrapper = styled.div``;

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
