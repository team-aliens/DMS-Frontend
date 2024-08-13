import { Text } from '@team-aliens/design-system';
import { WithNavigatorBar } from '../../components/WithNavigatorBar';
import { OutingOptionsHeader } from './OutingOptionsHeader';
import styled from 'styled-components';
import OutingEditTimeModal from '@/components/outings/OutingEditTimeModal';
import { useModal } from '@/hooks/useModal';
import DeleteOutingTime from '@/components/outings/DeleteOutingTime';
import { getOutingApplicationTime } from '@/apis/outing';
import { useEffect, useState } from 'react';
import { DAY } from '@/apis/remains';
import { OutingApplicationTimeResponse } from '@/apis/outing/response';

export interface IsDisabledApplicationTime
  extends OutingApplicationTimeResponse {
  is_disabled: boolean;
}

interface TimeBoxProps {
  isDisabled: boolean;
}

export function OutingTimeSet() {
  const { selectModal, closeModal, modalState } = useModal();
  const [selectedOutingTimeId, setSelectedOutingTimeId] = useState<
    string | null
  >(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const daysOfWeek: string[] = ['일', '월', '화', '수', '목', '금', '토'];
  const daysOfWeekMap: { [key: string]: DAY } = {
    일: 'SUNDAY',
    월: 'MONDAY',
    화: 'TUESDAY',
    수: 'WEDNESDAY',
    목: 'THURSDAY',
    금: 'FRIDAY',
    토: 'SATURDAY',
  };

  const [outingTimes, setOutingTimes] = useState<IsDisabledApplicationTime[]>(
    [],
  );

  useEffect(() => {
    const fetchOutingTimes = async () => {
      const response = await Promise.all(
        Object.values(daysOfWeekMap).map((day) =>
          getOutingApplicationTime(day),
        ),
      );
      const times = response.flatMap((response) =>
        response.data.outing_available_times.map((time) => ({
          ...time,
          is_disabled: false,
        })),
      );
      setOutingTimes(times);
    };
    fetchOutingTimes();
  }, []);

  const getTimesForDay = (day: DAY) => {
    return outingTimes.filter((time) => time.day_of_week === day);
  };

  const onClickOutingEditTime = (id: string | null, day: string) => {
    id &&
      (setSelectedOutingTimeId(id),
      setSelectedDay(daysOfWeekMap[day]),
      selectModal('OUTING_EDIT_TIME'));
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <OutingOptionsHeader
          timeSlotId={selectedOutingTimeId}
          outingTimesProps={outingTimes}
          SelectedDay={selectedDay}
        />
        <_WeeklyBox>
          <>
            {daysOfWeek.map((day) => {
              const color =
                day === '토'
                  ? 'rgb(0, 93, 232)'
                  : day === '일'
                  ? 'rgb(255, 70, 70)'
                  : '';
              return (
                <_DayOfTheWeek key={day}>
                  <_Text color={color}>{day}</_Text>
                  {day !== '토' && <_Line />}
                  <div>
                    {getTimesForDay(daysOfWeekMap[day]).map((outingTime) => (
                      <_TimeBox
                        key={outingTime.id}
                        onClick={() =>
                          onClickOutingEditTime(outingTime.id, day)
                        }
                        isDisabled={!outingTime.enabled}
                      >
                        <_TimeText>
                          {outingTime.outing_time} ~ {outingTime.arrival_time}
                        </_TimeText>
                      </_TimeBox>
                    ))}
                  </div>
                </_DayOfTheWeek>
              );
            })}
          </>
        </_WeeklyBox>
      </_Wrapper>
      {modalState.selectedModal === 'OUTING_EDIT_TIME' &&
        selectedOutingTimeId && (
          <OutingEditTimeModal
            closeModal={closeModal}
            timeSlotId={selectedOutingTimeId}
            selectedDay={selectedDay}
          />
        )}
      {modalState.selectedModal === 'DELETE_OUTING_TIME' &&
        selectedOutingTimeId && (
          <DeleteOutingTime
            closeModal={closeModal}
            outingAvailableTimeId={selectedOutingTimeId}
          />
        )}
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  width: 990px;
  margin: 0 auto;
  padding: 100px 0;
`;

const _WeeklyBox = styled.div`
  width: 100%;
  max-width: 1030px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  margin-top: 10vh;
  padding-top: 15px;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const _DayOfTheWeek = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.25%;
  align-items: center;
  position: relative;
`;

const _Line = styled.div`
  background: #ddd;
  width: 1px;
  height: 368px;
  position: absolute;
  right: 0;
`;

const _Text = styled.p<{ color: string }>`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: ${(props) => props.color || '#999'};
`;

const _TimeBox = styled.div<TimeBoxProps>`
  width: 112px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 5px;
  color: ${({ isDisabled }) => (isDisabled ? '#999999' : '#000')};
  background: ${({ isDisabled }) => (isDisabled ? '#F9F9F9' : '#fff')};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'auto')};
`;

const _TimeText = styled.div`
  font-size: 14px;
`;
