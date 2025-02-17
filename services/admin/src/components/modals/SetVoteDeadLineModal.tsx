import { Arrow, Button, Modal } from '@team-aliens/design-system';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import styled from 'styled-components';
import { useCalendar } from '@/hooks/useCalendar';
import { Calendar } from '../main/Calendar';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { useState } from 'react';
import { useModal } from '@/hooks/useModal';

interface voteDeadLineProps {
  setVoteDate: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SetVoteDeadLineModal = ({
  setVoteDate,
  setIsOpen,
}: voteDeadLineProps) => {
  const { closeModal } = useModal();
  const now = new Date();
  const { year, month, selectedDates, onArrowClick, daysInMonth, onDateClick } =
    useCalendar(now.getFullYear(), now.getMonth() + 1);

  const [timeValues, setTimeValues] = useState<string[]>(['', '', '', '']);

  const handleTimeChange = (index: number, newValue: string) => {
    const updatedValues = [...timeValues];
    updatedValues[index] = newValue;
    setTimeValues(updatedValues);
  };

  const handleVoteDateChange = () => {
    let dateString = '';

    if (selectedDates.length > 0) {
      dateString = `${year}-${month}-${selectedDates[0].getDate()} / ${
        timeValues[0] || '00'
      }:${timeValues[1] || '00'}`;
    }

    if (selectedDates.length > 1) {
      dateString += ` ~ ${year}-${month}-${selectedDates[1].getDate()} / ${
        timeValues[2] || '00'
      }:${timeValues[3] || '00'}`;
    }

    setVoteDate(dateString);
    setIsOpen(false);
  };

  return (
    <Modal
      close={closeModal}
      buttonList={[
        <_Footer>
          <div>
            {selectedDates.length > 0 &&
              `${year}-${month}-${selectedDates[0].getDate()} / ${
                timeValues[0] || '00'
              }:${timeValues[1] || '00'}`}
            {selectedDates.length > 1 &&
              ` ~ ${year}-${month}-${selectedDates[1].getDate()} / ${
                timeValues[2] || '00'
              }:${timeValues[3] || '00'}`}
          </div>
          <Button
            disabled={timeValues.some((item) => item === '')}
            onClick={handleVoteDateChange}
          >
            확인
          </Button>
        </_Footer>,
      ]}
      title="투표 마감일"
      width="880px"
    >
      <_Wrapper>
        <_Header>
          <div onClick={() => onArrowClick('left')}>
            <Arrow direction="left" size={24} />
          </div>
          {year}년 {month}월
          <div onClick={() => onArrowClick('right')}>
            <Arrow direction="right" size={24} />
          </div>
        </_Header>
        <_Contents>
          <Calendar
            selectedDates={selectedDates}
            daysInMonth={daysInMonth}
            onDateClick={onDateClick}
          />
          <_TimeSetDiv>
            <span>시간 지정</span>
            <_TimeInput>
              <_Box>
                <_InputBox>
                  <input
                    placeholder="00"
                    maxLength={2}
                    value={timeValues[0]}
                    onChange={(e) => handleTimeChange(0, e.target.value)}
                    type="text"
                  />
                  <p>:</p>
                  <input
                    placeholder="00"
                    maxLength={2}
                    value={timeValues[1]}
                    onChange={(e) => handleTimeChange(1, e.target.value)}
                    type="text"
                  />
                </_InputBox>
                <p>~</p>
                <_InputBox>
                  <input
                    placeholder="00"
                    maxLength={2}
                    value={timeValues[2]}
                    onChange={(e) => handleTimeChange(2, e.target.value)}
                    type="text"
                  />
                  <p>:</p>
                  <input
                    placeholder="00"
                    maxLength={2}
                    value={timeValues[3]}
                    onChange={(e) => handleTimeChange(3, e.target.value)}
                    type="text"
                  />
                </_InputBox>
              </_Box>
            </_TimeInput>
          </_TimeSetDiv>
        </_Contents>
      </_Wrapper>
    </Modal>
  );
};

const _InputBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  > input {
    width: 25px;
    font: ${font.bodyL};
    background-color: transparent;
  }
`;

const _Box = styled.div`
  background-color: ${color.primaryLighten2};
  padding: 3px 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 56px;
`;

const _TimeInput = styled.div`
  border: 1px solid ${color.gray3};
  border-radius: 12px;
  padding: 39px 16px;
`;

const _Contents = styled.div`
  display: flex;
  gap: 28px;
`;

const _TimeSetDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  > span {
    font: ${font.bodyM};
  }
`;

const _Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font: ${font.titleM};
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const _Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: ${font.bodyL};
  > div {
    cursor: pointer;
  }
`;
