import { useState } from 'react';
import { Button, Modal } from '@team-aliens/design-system';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import styled from 'styled-components';

interface OptionItem {
  text: string;
  check: boolean;
}

const INITIAL_GRADE: OptionItem[] = [
  { text: '전체', check: false },
  { text: '1학년', check: false },
  { text: '2학년', check: false },
  { text: '3학년', check: false },
];

const INITIAL_GENDER: OptionItem[] = [
  { text: '전체', check: false },
  { text: '남자', check: false },
  { text: '여자', check: false },
];

export const SetVoterModal = () => {
  const [grade, setGrade] = useState(INITIAL_GRADE);
  const [gender, setGender] = useState(INITIAL_GENDER);

  const onClickBtn = (index: number, type: 'grade' | 'gender') => {
    const setState = type === 'grade' ? setGrade : setGender;

    setState((prev) => {
      if (index === 0) {
        const isAllChecked = prev.slice(1).every((item) => item.check);
        return prev.map((item, i) => ({
          ...item,
          check: i === 0 ? !isAllChecked : !isAllChecked,
        }));
      }
      const newState = prev.map((item, i) =>
        i === index ? { ...item, check: !item.check } : item,
      );
      newState[0].check = newState.slice(1).every((item) => item.check);
      return newState;
    });
  };

  return (
    <Modal
      close={() => {}}
      buttonList={[<Button kind="outline">취소</Button>, <Button>확인</Button>]}
      title="투표 항목 생성"
    >
      <Contents>
        <Box>
          학년
          <ButtonBox>
            {grade.map((data, index) => (
              <Button
                key={index}
                onClick={() => onClickBtn(index, 'grade')}
                kind={data.check ? 'contained' : 'outline'}
              >
                {data.text}
              </Button>
            ))}
          </ButtonBox>
        </Box>
        <Box>
          성별
          <ButtonBox>
            {gender.map((data, index) => (
              <Button
                key={index}
                onClick={() => onClickBtn(index, 'gender')}
                kind={data.check ? 'contained' : 'outline'}
              >
                {data.text}
              </Button>
            ))}
          </ButtonBox>
        </Box>
      </Contents>
    </Modal>
  );
};

const Contents = styled.div`
  margin-bottom: 337px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const Box = styled.div`
  font: ${font.bodyS};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;
