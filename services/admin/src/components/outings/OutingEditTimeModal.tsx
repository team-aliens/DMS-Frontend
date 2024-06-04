import { Button, DropDown, Modal } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useForm } from '@/hooks/useForm';
import { useToast } from '@/hooks/useToast';
import { StudyTimeSlotsResponse } from '@/apis/studyRooms/response';
import { useState } from 'react';
import { hourToArray, minToArray } from '@/utils/timeToArray';
import { getTextWithDay } from '@/utils/translate';
import { useGetRemainTime } from '@/hooks/useRemainApi';
import { useModal } from '@/hooks/useModal';
import DeleteOutingTime from './DeleteOutingTime';

interface PropsType {
  initTimeSlots?: StudyTimeSlotsResponse;
  closeModal: () => void;
  ModalType?: 'create' | 'edit';
  timeSlotId?: string;
}

interface FormState {
  dayOfWeek: string;
  start_hour: string;
  start_min: string;
  end_hour: string;
  end_min: string;
}

export default function OutingEditTimeModal({
  closeModal,
  timeSlotId,
  initTimeSlots,
  ModalType,
}: PropsType) {
  const dayToArray = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];
  const { selectModal, modalState } = useModal();
  const [timeSlots, setTimeSlots] = useState(initTimeSlots);

  const timeSlot =
    ModalType === 'create' &&
    timeSlots.time_slots.filter((slot) => slot.id === timeSlotId);

  const { data: remainTime } = useGetRemainTime();

  const { state: outingTimeState, setState } = useForm<FormState>({
    dayOfWeek: getTextWithDay(remainTime?.start_day_of_week),
    start_hour: timeSlot[0]?.start_time.slice(0, 2) ?? '00',
    start_min: timeSlot[0]?.start_time.slice(3, 5) ?? '00',
    end_hour: timeSlot[0]?.end_time.slice(0, 2) ?? '00',
    end_min: timeSlot[0]?.end_time.slice(3, 5) ?? '00',
  });

  const onClickEdit = () => {};
  const onClickDelete = () => {
    selectModal('DELETE_OUTING_TIME');
  };

  const onChange = (name: string, value: string) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal
      title="외출 시간 수정"
      inputList={[
        <>
          <_Container>
            <DropDown
              items={dayToArray}
              placeholder={''}
              onChange={(value) => onChange(value, 'dayOfWeek')}
              width={110}
              label="요일"
            />
          </_Container>
          <div style={{ position: 'relative' }}>
            <_Label>시간</_Label>
            <_Wrapper>
              <DropDown
                placeholder="00"
                value={outingTimeState.start_hour}
                items={hourToArray}
                onChange={(value) => onChange('start_hour', value)}
                width={80}
              ></DropDown>
              <p>:</p>
              <DropDown
                placeholder="00"
                value={outingTimeState.start_min}
                items={minToArray}
                onChange={(value) => onChange('start_min', value)}
                width={80}
              ></DropDown>
              <p className="to">~</p>
              <DropDown
                placeholder="00"
                value={outingTimeState.end_hour}
                items={hourToArray}
                onChange={(value) => onChange('end_hour', value)}
                width={80}
              ></DropDown>
              <p>:</p>
              <DropDown
                placeholder="00"
                value={outingTimeState.end_min}
                items={minToArray}
                onChange={(value) => onChange('end_min', value)}
                width={80}
              ></DropDown>
            </_Wrapper>
          </div>
        </>,
      ]}
      buttonList={[
        <Button color="gray" onClick={onClickDelete}>
          삭제
        </Button>,
        <Button color="primary" onClick={onClickEdit}>
          수정
        </Button>,
      ]}
      close={closeModal}
    />
  );
}

const _Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  > p {
    margin: 0 8px;
  }
  > .to {
    margin: 0 32px;
  }
  > div > label > input {
    text-align: center;
  }
`;

const _Container = styled.div`
  padding-left: 25px;
`;

const _Label = styled.label`
  color: rgb(85, 85, 85);
  font-weight: 400;
  line-height: 26px;
  font-size: 16px;
  padding-left: 25px;
  position: absolute;
  top: 20px;
`;
