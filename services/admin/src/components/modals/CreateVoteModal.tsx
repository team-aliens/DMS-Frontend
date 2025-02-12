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

interface VoteProps {
  voteTopic: boolean;
  openModal: boolean;
  isOpenModal: () => void;
}

export const CreateVoteModal = ({
  voteTopic,
  openModal,
  isOpenModal,
}: VoteProps) => {
  const { closeModal } = useModal();
  const [voteTitle, setVoteTitle] = useState<string>('');
  const [voteDate, setVoteDate] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [voteEx, setVoteEx] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const voteTopicRadios = ['학생', '찬반', '선택'];

  const onVoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVoteTitle(value);
  };

  const onVoteExChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setVoteEx(value);
  };

  const setVoteDeadLineModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {openModal && (
        <Modal
          close={isOpenModal}
          title="투표 항목 생성"
          buttonList={[
            <Button kind="outline" onClick={isOpenModal}>
              취소
            </Button>,
            <Button disabled={!(voteTitle && voteDate && voteEx)}>
              {voteTopic ? '다음' : '확인'}
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
                  value={voteTopic ? voteTitle : '모범학생 투표'}
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
                        <div
                          key={index}
                          onClick={() => setSelectedIndex(index)}
                        >
                          {data}
                          <Radio
                            className={selectedIndex === index ? 'checked' : ''}
                          />
                        </div>
                      ))}
                    </_RadioBox>
                  </_VoteTopicBox>
                ) : (
                  <_ButtonBox>
                    <Button onClick={setVoteDeadLineModal}>
                      투표 마감일 지정
                    </Button>
                  </_ButtonBox>
                )}
              </_InputBox>
              {voteTopic && (
                <_ButtonBox>
                  <Button onClick={setVoteDeadLineModal}>
                    투표 마감일 지정
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

      {isOpen && <SetVoteDeadLineModal />}
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
  width: 130px;
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
