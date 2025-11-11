import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import styled from 'styled-components';

interface DayInfo {
  date: Date;
  isCurrentMonth: boolean;
}

interface CalendarProps {
  selectedDates: Date[];
  onDateClick: (dayInfo: DayInfo) => void;
  daysInMonth: DayInfo[];
}

export const Calendar = ({
  selectedDates,
  onDateClick,
  daysInMonth,
}: CalendarProps) => {
  const weeks = ['일', '월', '화', '수', '목', '금', '토'];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
        {daysInMonth.map((day, index) => (
          <_DateBox
            key={index}
            onClick={() => onDateClick(day)}
            isSelected={selectedDates.some(
              (d) => d.getTime() === day.date.getTime(),
            )}
            isToday={day.date.getTime() === today.getTime()}
            isCurrentMonth={day.isCurrentMonth}
          >
            {day.date.getDate()}
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

const _DateBox = styled.div<{
  isSelected: boolean;
  isToday: boolean;
  isCurrentMonth: boolean;
}>`
  background: ${({ isSelected, isToday, isCurrentMonth }) =>
    isSelected
      ? color.primary
      : isCurrentMonth
      ? color.primaryLighten2
      : color.gray2};
  color: ${({ isSelected, isToday, isCurrentMonth }) =>
    isSelected ? 'white' : isCurrentMonth ? 'black' : color.gray5};
  border: ${({ isToday }) =>
    isToday ? `1px solid ${color.primaryDarken1}` : 'none'};
  border-radius: 8px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ isCurrentMonth }) => (isCurrentMonth ? 'pointer' : 'default')};
  &:hover {
    background-color: ${({ isCurrentMonth }) =>
      isCurrentMonth ? color.primary : color.gray2};
    color: ${({ isCurrentMonth }) => (isCurrentMonth ? 'white' : color.gray5)};
  }
`;
