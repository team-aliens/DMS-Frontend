import { useDeleteVote, useVoteList } from '@/hooks/useVoteApi';
import { Button } from '@team-aliens/design-system';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CreateVoteModal } from './CreateVoteModal';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';

interface PropsType {
  surveyId: string;
  topic_name: string;
  start_time: string;
  end_time: string;
}

export const VoteDuePopup = ({
  surveyId,
  topic_name,
  start_time,
  end_time,
}: PropsType) => {
  const isDeadlinePassed = new Date(end_time) < new Date();
  const { mutate: deleteVote } = useDeleteVote();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const formatVoteDate = (startTime: string, endTime: string) => {
    const formatDate = (isoString: string) => {
      const date = new Date(isoString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // JS의 month는 0부터 시작하므로 +1
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${year}-${month}-${day} / ${hours}:${minutes
        .toString()
        .padStart(2, '0')}`;
    };

    return `${formatDate(startTime)} ~ ${formatDate(endTime)}`;
  };

  const voteDelete = () => {
    deleteVote(surveyId);
    window.location.reload();
  };

  const isEditModal = () => {
    setIsEdit(true);
  };

  const isClose = () => {
    setIsEdit(false);
  };

  const { data } = useVoteList();
  const filterData = data.voting_topics.filter((data) => data.id === surveyId);
  return (
    <>
      {isEdit && (
        <CreateVoteModal
          edit={true}
          isClose={isClose}
          voteTopic={filterData[0].vote_type !== 'MODEL_STUDENT_VOTE'}
          surveyId={surveyId}
          topic_name={filterData[0].topic_name}
          description={filterData[0].description}
          vote_date={formatVoteDate(
            filterData[0].start_time,
            filterData[0].end_time,
          )}
        />
      )}
      <_VoteDuePopup>
        <_VoteInfo>
          <_PopupTitle>{topic_name}</_PopupTitle>
          <_Contents>
            <_PopupText>마감일</_PopupText>
            <Deadline DeadLine={isDeadlinePassed}>
              {formatVoteDate(start_time, end_time)}
            </Deadline>
          </_Contents>
        </_VoteInfo>

        <_Footer>
          {isDeadlinePassed && (
            <Link to={`result/${surveyId}`}>
              <Button>결과 확인</Button>
            </Link>
          )}

          <Button onClick={isEditModal}>수정</Button>
          <Button kind="outline" color="gray" onClick={voteDelete}>
            삭제
          </Button>
        </_Footer>
      </_VoteDuePopup>
    </>
  );
};

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const _VoteDuePopup = styled.div`
  width: 428px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 30px 40px rgba(0, 115, 255, 0.12),
      0px 12px 20px rgba(0, 115, 255, 0.06);
  }
`;

const _VoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const _PopupTitle = styled.div`
  color: #343434;
  font: ${font.titleM};
  word-wrap: break-word;
`;

const _PopupText = styled.div`
  color: #343434;
  font: ${font.bodyL};
  word-wrap: break-word;
`;

const Deadline = styled.div<{ DeadLine: boolean }>`
  color: ${({ DeadLine }) => (DeadLine ? color.gray5 : color.primary)};
  font: ${font.bodyL};
  word-wrap: break-word;
`;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  gap: 4px;
`;
