import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import styled from 'styled-components';

interface CalendarProps {
  selectedDates: Date[];
  onDateClick: (date: Date) => void;
  daysInMonth: (Date | null)[];
}

export const Calendar = ({
  selectedDates,
  onDateClick,
  daysInMonth,
}: CalendarProps) => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <_Calendar>
      <_Weeks>
        {weeks.map((data, index) => (
          <_Week key={index} isSunday={index === 0} isSaturday={index === 6}>
            {data}
          </_Week>
        ))}
      </_Weeks>
      <_DatesGrid>
        {daysInMonth.map((date, index) => (
          <_DateBox
            key={index}
            onClick={() => onDateClick(date)}
            isSelected={selectedDates.some(
              (d) => d.getTime() === date?.getTime(),
            )}
          >
            {date ? date.getDate() : ''}
          </_DateBox>
        ))}
      </_DatesGrid>
    </_Calendar>
  );
};

const _Week = styled.div<{ isSunday: boolean; isSaturday: boolean }>`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${font.bodyL};
  ${({ isSunday, isSaturday }) => `
  color: ${isSunday ? color.error : isSaturday ? color.primary : 'black'};
`}
`;

const _Weeks = styled.div`
  display: flex;
  gap: 8px;
`;

const _Calendar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const _DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 48px);
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

const _DateBox = styled.div<{ isSelected: boolean }>`
  background: ${({ isSelected }) =>
    isSelected ? color.primary : color.primaryLighten2};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  border-radius: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${color.primary};
    color: white;
  }
`;
