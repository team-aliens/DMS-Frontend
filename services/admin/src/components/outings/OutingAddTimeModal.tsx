import { Button, DropDown, Modal } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useForm } from '@/hooks/useForm';
import { useToast } from '@/hooks/useToast';
import { StudyTimeSlotsResponse } from '@/apis/studyRooms/response';
import { useState, useEffect } from 'react';
import { hourToArray, minToArray } from '@/utils/timeToArray';
import { dayLongToArray } from '@/utils/timeToArray';
import { useSetOutingTime } from '@/hooks/useOutingApi';

interface PropsType {
  initTimeSlots?: StudyTimeSlotsResponse;
  closeModal: () => void;
  ModalType?: 'create' | 'edit';
  timeSlotId?: string;
}

interface FormState {
  start_hour: string;
  start_min: string;
  end_hour: string;
  end_min: string;
  dayOfWeek: string;
}

export default function OutingAddTimeModal({
  closeModal,
  timeSlotId,
  initTimeSlots,
  ModalType,
}: PropsType) {
  const [timeSlots, setTimeSlots] = useState(initTimeSlots);

  const timeSlot =
    ModalType === 'create' &&
    timeSlots.time_slots.filter((slot) => slot.id === timeSlotId);

  const { state: outingTimeState, setState } = useForm<FormState>({
    start_hour: timeSlot[0]?.start_time.slice(0, 2) ?? '00',
    start_min: timeSlot[0]?.start_time.slice(3, 5) ?? '00',
    end_hour: timeSlot[0]?.end_time.slice(0, 2) ?? '00',
    end_min: timeSlot[0]?.end_time.slice(3, 5) ?? '00',
    dayOfWeek: '',
  });

  const convertDayToUpper = (day: string) => {
    const daysMap: { [key: string]: string } = {
      월요일: 'MONDAY',
      화요일: 'TUESDAY',
      수요일: 'WEDNESDAY',
      목요일: 'THURSDAY',
      금요일: 'FRIDAY',
      토요일: 'SATURDAY',
      일요일: 'SUNDAY',
    };
    return daysMap[day] || ''; // 변환된 요일 반환
  };

  // TODO: api 연동할 때 바꿔 줘야 함
  const { mutate: mutateCreateTime } = useSetOutingTime({
    day_of_week: outingTimeState.dayOfWeek,
    outing_time: `${outingTimeState.start_hour}:${outingTimeState.start_min}`,
    arrival_time: `${outingTimeState.end_hour}:${outingTimeState.end_min}`,
  });

  const onChange = (name: string, value: string) => {
    if (name === 'dayOfWeek') {
      value = convertDayToUpper(value);
    }
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal
      close={closeModal}
      title="외출 시간 추가"
      inputList={[
        <>
          <div>
            <DropDown
              items={dayLongToArray}
              placeholder={''}
              onChange={(value) => onChange('dayOfWeek', value)}
              width={110}
              label="요일"
            />
          </div>
          <div style={{ position: 'relative' }}>
            <_Label>시간</_Label>
            <_Wrapper>
              <DropDown
                placeholder="00"
                value={outingTimeState.start_hour}
                items={hourToArray}
                onChange={(value) => onChange('start_hour', value)}
                width={90}
              ></DropDown>
              <p>:</p>
              <DropDown
                placeholder="00"
                value={outingTimeState.start_min}
                items={minToArray}
                onChange={(value) => onChange('start_min', value)}
                width={90}
              ></DropDown>
              <p className="to">~</p>
              <DropDown
                placeholder="00"
                value={outingTimeState.end_hour}
                items={hourToArray}
                onChange={(value) => onChange('end_hour', value)}
                width={90}
              ></DropDown>
              <p>:</p>
              <DropDown
                placeholder="00"
                value={outingTimeState.end_min}
                items={minToArray}
                onChange={(value) => onChange('end_min', value)}
                width={90}
              ></DropDown>
            </_Wrapper>
          </div>
        </>,
      ]}
      buttonList={[<Button onClick={() => mutateCreateTime()}>추가</Button>]}
    ></Modal>
  );
}

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  > p {
    margin: 0 9px;
  }
  > .to {
    margin: 0 32px;
  }
  > div > label > input {
    text-align: center;
  }
`;

const _Label = styled.label`
  color: rgb(85, 85, 85);
  font-weight: 400;
  line-height: 26px;
  font-size: 16px;
  /* padding-left: 25px; */
  position: absolute;
  top: 20px;
`;
