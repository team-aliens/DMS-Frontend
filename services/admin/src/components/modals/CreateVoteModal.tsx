import { useModal } from '@/hooks/useModal';
import {
  Button,
  Input,
  Modal,
  Radio,
  TextArea,
} from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useState } from 'react';
import styled from 'styled-components';
import { SetVoteDeadLineModal } from './SetVoteDeadLineModal';
import { VotePopup } from './VotePopup';
import { EditVoteStudent } from './EditVoteStudent';
import { usePatchVote, useWriteVote } from '@/hooks/useVoteApi';
import { getVoteType } from '@/utils/getVoteType';

interface VoteProps {
  voteTopic: boolean;
  edit: boolean;
  isClose: () => void;
  surveyId?: string;
  topic_name?: string;
  description?: string;
  vote_date?: string;
  votingId?: string;
}

export const CreateVoteModal = ({
  voteTopic,
  isClose,
  edit,
  surveyId,
  topic_name,
  description,
  vote_date,
}: VoteProps) => {
  const { mutate: writeVote } = useWriteVote();
  const { mutate: editVote } = usePatchVote();
  const { closeModal } = useModal(); // useModal을 사용하지 않고 isOpen으로 모달을 관리 한 것은 현재 디자인 상 모달 위 모달을 구현해야 하는데 이유 모를 오류로 인해 모달을 열려고 하면 처음 상태로 돌아가서 사용했습니다..
  const [isDeadLineOpen, setIsDeadLineOpen] = useState<boolean>(false);
  const [voteTitle, setVoteTitle] = useState<string>(edit ? topic_name : '');
  const [voteDate, setVoteDate] = useState<string>(edit ? vote_date : '');
  const [voteTopicId, setVoteTopicId] = useState<string>('');
  const voteTopicRadios = ['학생', '찬반', '선택'];
  const [selectedIndex, setSelectedIndex] = useState<boolean[]>(
    new Array(voteTopicRadios.length).fill(false),
  );
  const [voteEx, setVoteEx] = useState<string>(edit ? description : '');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditStudent, setIsEditStudent] = useState<boolean>(false);

  const onVoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVoteTitle(value);
  };

  const onClose = () => {
    setIsDeadLineOpen(false);
  };

  const onEditStudentClose = () => {
    setIsEditStudent(false);
  };

  const onVoteExChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setVoteEx(value);
  };

  const setVoteDeadLineModal = () => {
    setIsDeadLineOpen(true);
  };
  const setEditStudentModal = () => {
    setIsEditStudent(true);
  };

  const radioClick = (index: number) => {
    setSelectedIndex((prev) =>
      prev.map((val, i) => (i === index ? !val : val)),
    );
  };

  const parseVoteDate = (dateString: string) => {
    try {
      const [start, end] = dateString.split(' ~ ');

      const parseDateTime = (dateTime: string) => {
        const [datePart, timePart] = dateTime.split(' / ');
        const [year, month, day] = datePart.split('-').map(Number);
        const [hour, minute] = timePart.split(':').map(Number);

        // 한국 시간(KST) 기준으로 변환 후 UTC로 조정
        const date = new Date(Date.UTC(year, month - 1, day, hour, minute));

        return date.toISOString(); // 이 값은 KST 유지된 상태로 변환됨
      };

      return {
        start_time: parseDateTime(start),
        end_time: parseDateTime(end),
      };
    } catch (error) {
      console.error('날짜 변환 오류:', error);
      return null;
    }
  };

  const onOpen = () => {
    if (selectedIndex[2]) {
      setIsOpen(true);
      const parsedDates = parseVoteDate(voteDate);
      if (!edit) {
        writeVote(
          {
            topic_name: voteTopic
              ? voteTitle
              : `${new Date().getMonth() + 1}월 모범학생 투표`,
            description: voteEx,
            start_time: parsedDates.start_time,
            end_time: parsedDates.end_time,
            vote_type: voteTopic
              ? getVoteType(selectedIndex)
              : 'MODEL_STUDENT_VOTE',
          },
          {
            onSuccess: (data) => {
              const { voting_topic_id } = data;
              setVoteTopicId(voting_topic_id);
            },
          },
        );
      } else {
        editVote(
          {
            content: {
              topic_name: voteTopic
                ? voteTitle
                : `${new Date().getMonth() + 1}월 모범학생 투표`,
              description: voteEx,
              start_time: parsedDates.start_time,
              end_time: parsedDates.end_time,
              vote_type: voteTopic
                ? getVoteType(selectedIndex)
                : 'MODEL_STUDENT_VOTE',
            },
            voteId: surveyId,
          },
          {
            onSuccess: () => {
              setVoteTopicId(surveyId);
            },
          },
        );
      }
    } else {
      const parsedDates = parseVoteDate(voteDate);

      if (!parsedDates) {
        console.error('날짜 형식이 잘못되었습니다.');
        return;
      }
      if (!edit) {
        writeVote({
          topic_name: voteTopic
            ? voteTitle
            : `${new Date().getMonth() + 1}월 모범학생 투표`,
          description: voteEx,
          start_time: parsedDates.start_time,
          end_time: parsedDates.end_time,
          vote_type: voteTopic
            ? getVoteType(selectedIndex)
            : 'MODEL_STUDENT_VOTE',
        });
      } else {
        editVote({
          content: {
            topic_name: voteTopic
              ? voteTitle
              : `${new Date().getMonth() + 1}월 모범학생 투표`,
            description: voteEx,
            start_time: parsedDates.start_time,
            end_time: parsedDates.end_time,
            vote_type: voteTopic
              ? getVoteType(selectedIndex)
              : 'MODEL_STUDENT_VOTE',
          },
          voteId: surveyId,
        });
      }
      window.location.reload();
    }
  };

  const onVotePopupClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <VotePopup
          mode="create"
          onClose={onVotePopupClose}
          votingId={voteTopicId}
        />
      )}
      {!isOpen && (
        <Modal
          close={closeModal}
          title={edit ? '투표 항목 수정' : '투표 항목 생성'}
          buttonList={[
            <Button kind="outline" onClick={isClose}>
              취소
            </Button>,
            <Button
              disabled={
                voteTopic
                  ? voteTitle === '' ||
                    voteDate === '' ||
                    voteEx === '' ||
                    (() => {
                      const selectedCount = selectedIndex.filter(
                        (val) => val,
                      ).length;
                      return selectedCount === 0 || selectedCount > 1;
                    })()
                  : voteDate === '' || voteEx === ''
              }
              onClick={onOpen}
            >
              {selectedIndex[2] ? '다음' : '확인'}
            </Button>,
          ]}
          width="1150px"
        >
          <_Contents>
            <_Wrapper>
              <_InputBox>
                <Input
                  placeholder={
                    voteTopic ? '투표 제목을 작성해주세요.' : '모범학생 투표'
                  }
                  label="투표 제목"
                  name="투표 제목"
                  onChange={voteTopic ? onVoteTitleChange : null}
                  value={
                    voteTopic
                      ? voteTitle
                      : `${new Date().getMonth() + 1}월 모범학생 투표`
                  }
                />

                <Input
                  placeholder="없음"
                  label="투표 마감일"
                  name="투표 마감일"
                  onChange={() => {}}
                  value={voteDate}
                />

                {voteTopic ? (
                  <_VoteTopicBox>
                    투표 주제
                    <_RadioBox>
                      {voteTopicRadios.map((data, index) => (
                        <div key={index} onClick={() => radioClick(index)}>
                          {data}
                          <Radio
                            className={selectedIndex[index] ? 'checked' : ''}
                          />
                        </div>
                      ))}
                    </_RadioBox>
                  </_VoteTopicBox>
                ) : (
                  <_ButtonBox>
                    <Button onClick={setVoteDeadLineModal}>
                      {edit ? '투표 마감일 수정' : '투표 마감일 지정'}
                    </Button>
                    <Button onClick={setEditStudentModal}>
                      {edit ? '제외 학생 수정' : '제외 학생 지정'}
                    </Button>
                  </_ButtonBox>
                )}
              </_InputBox>
              {voteTopic && (
                <_ButtonBox>
                  <Button onClick={setVoteDeadLineModal}>
                    {edit ? '투표 마감일 수정' : '투표 마감일 지정'}
                  </Button>
                </_ButtonBox>
              )}
            </_Wrapper>
            <_TextAreaBox>
              설명 추가
              <TextArea
                value={voteEx}
                onChange={onVoteExChange}
                width={680}
                height={218}
                placeholder="설명을 추가해주세요."
              />
            </_TextAreaBox>
          </_Contents>
        </Modal>
      )}

      {isDeadLineOpen && (
        <SetVoteDeadLineModal
          setVoteDate={setVoteDate}
          setIsOpen={setIsDeadLineOpen}
          onClose={onClose}
        />
      )}
      {isEditStudent && (
        <EditVoteStudent onClose={onEditStudentClose} edit={edit} />
      )}
    </>
  );
};

const _TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font: ${font.bodyS};
  color: ${color.gray6};
`;

const _Contents = styled.div`
  display: flex;
  gap: 44px;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
`;

const _ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;

const _VoteTopicBox = styled.div`
  display: flex;
  flex-direction: column;
  font: ${font.bodyS};
  color: ${color.gray6};
`;

const _RadioBox = styled.div`
  font: ${font.bodyM};
  display: flex;
  gap: 12px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

const _InputBox = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
