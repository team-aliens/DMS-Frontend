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

export function OutingTimeSet() {
  const { selectModal, closeModal, modalState } = useModal();
  const [selectedOutingTimeId, setSelectedOutingTimeId] = useState<
    string | null
  >(null);
  const daysOfWeek: string[] = ['월', '화', '수', '목', '금', '토', '일'];
  const daysOfWeekMap: { [key: string]: DAY } = {
    월: 'MONDAY',
    화: 'TUESDAY',
    수: 'WEDNESDAY',
    목: 'THURSDAY',
    금: 'FRIDAY',
    토: 'SATURDAY',
    일: 'SUNDAY',
  };

  const [outingTimes, setOutingTimes] = useState<
    OutingApplicationTimeResponse[]
  >([]);

  useEffect(() => {
    const fetchOutingTimes = async () => {
      const response = await Promise.all(
        Object.values(daysOfWeekMap).map((day) =>
          getOutingApplicationTime(day),
        ),
      );
      const times = response.flatMap(
        (response) => response.data.outing_available_times,
      );
      setOutingTimes(times);
    };

    fetchOutingTimes();
  }, []);

  const getTimeForDay = (day: string) => {
    const outingTime = outingTimes.find(
      (time) => time.day_of_week === daysOfWeekMap[day],
    );
    return outingTime
      ? `${outingTime.outing_time} ~ ${outingTime.arrival_time}`
      : '00:00 ~ 00:00';
  };

  const getIdForDay = (day: string) => {
    const outingTime = outingTimes.find(
      (time) => time.day_of_week === daysOfWeekMap[day],
    );
    return outingTime ? outingTime.id : null;
  };

  const onClickOutingEditTime = (id: string | null) => {
    id && (setSelectedOutingTimeId(id), selectModal('OUTING_EDIT_TIME'));
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <OutingOptionsHeader />
        <_WeeklyBox>
          {daysOfWeek.map((item) => (
            <_DayOfTheWeek key={item}>
              <_Text>{item}</_Text>
              {item !== '일' && <_Line />}
              <div>
                <_TimeBox
                  onClick={() => onClickOutingEditTime(getIdForDay(item))}
                >
                  <Text color="gray10" size="bodyS">
                    {getTimeForDay(item)}
                  </Text>
                </_TimeBox>
              </div>
            </_DayOfTheWeek>
          ))}
        </_WeeklyBox>
      </_Wrapper>
      {modalState.selectedModal === 'OUTING_EDIT_TIME' &&
        selectedOutingTimeId && (
          <OutingEditTimeModal
            closeModal={closeModal}
            timeSlotId={selectedOutingTimeId}
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
  margin-top: 100px;
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

const _Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: #999;
`;

const _TimeBox = styled.div`
  width: 112px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
