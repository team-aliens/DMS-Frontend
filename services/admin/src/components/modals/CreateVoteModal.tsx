import { Button, Input, Radio, TextArea } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useState } from 'react';
import styled from 'styled-components';

interface VoteProps {
  voteTopic: boolean;
}

export const CreateVoteModal = ({ voteTopic }: VoteProps) => {
  const [voteTitle, setVoteTitle] = useState<string>('');
  const [voteDate, setVoteDate] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [voteEx, setVoteEx] = useState<string>('');

  const voteTopicRadios = ['학생', '찬반', '선택'];

  const onVoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVoteTitle(value);
  };

  const onVoteExChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setVoteEx(value);
  };

  return (
    <ModalBackground>
      <Modal>
        <Header>
          투표 항목 생성
          <Contents>
            <Wrapper>
              <InputBox>
                <Input
                  placeholder="모범학생 투표"
                  label="투표 제목"
                  name="투표 제목"
                  onChange={onVoteTitleChange}
                  value={voteTitle}
                />
                <div>
                  <Input
                    placeholder="없음"
                    label="투표 마감일"
                    name="투표 마감일"
                    onChange={() => {}}
                    value={voteDate}
                  />
                </div>
                {voteTopic ? (
                  <VoteTopicBox>
                    투표 주제
                    <RadioBox>
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
                    </RadioBox>
                  </VoteTopicBox>
                ) : (
                  <ButtonBox>
                    <Button>투표 마감일 지정</Button>
                  </ButtonBox>
                )}
              </InputBox>
              {voteTopic && (
                <ButtonBox>
                  <Button>투표 마감일 지정</Button>
                </ButtonBox>
              )}
            </Wrapper>
            <TextAreaBox>
              설명 추가
              <TextArea
                value={voteEx}
                onChange={onVoteExChange}
                width={680}
                height={218}
                placeholder="설명을 추가해주세요."
              />
            </TextAreaBox>
          </Contents>
        </Header>
        <ButtonDiv>
          <Button kind="outline">취소</Button>
          <Button disabled={!(voteTitle && voteDate && voteEx)}>확인</Button>
        </ButtonDiv>
      </Modal>
    </ModalBackground>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  gap: 12px;
`;

const TextAreaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font: ${font.bodyS};
  color: ${color.gray6};
`;

const Contents = styled.div`
  display: flex;
  gap: 44px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 51px;
`;

const ButtonBox = styled.div`
  width: 130px;
`;

const VoteTopicBox = styled.div`
  display: flex;
  flex-direction: column;
  font: ${font.bodyS};
  color: ${color.gray6};
`;

const RadioBox = styled.div`
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

const InputBox = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Modal = styled.div`
  width: 1150px;
  border-radius: 12px;
  background-color: white;
  font: ${font.headlineS};
  padding: 34px 30px 34px 68px;
  display: flex;
  flex-direction: column;
  gap: 264px;
`;

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
