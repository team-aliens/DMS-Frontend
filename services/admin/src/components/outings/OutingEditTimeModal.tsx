import { Button, DropDown, Modal } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useForm } from '@/hooks/useForm';
import { useState, useEffect } from 'react';
import { hourToArray, minToArray } from '@/utils/timeToArray';
import { useModal } from '@/hooks/useModal';
import { useEditOutingTime, useGetPossibleTime } from '@/hooks/useOutingApi';
import { dayLongToArray } from '@/utils/timeToArray';

interface PropsType {
  closeModal: () => void;
  timeSlotId?: string;
  selectedDay: string;
}

interface FormState {
  start_hour: string;
  start_min: string;
  end_hour: string;
  end_min: string;
}

export default function OutingEditTimeModal({
  closeModal,
  timeSlotId,
  selectedDay,
}: PropsType) {
  const { selectModal } = useModal();
  const [dayToKo, setDayToKo] = useState('');

  const { data: possibleTime } = useGetPossibleTime(selectedDay);
  const datas = possibleTime?.data?.outing_available_times?.filter(
    (item) => item.id === timeSlotId,
  );

  const { state: outingTimeState, setState: setTimeState } = useForm<FormState>(
    {
      start_hour: datas?.[0].outing_time?.slice(0, 2) ?? '00',
      start_min: datas?.[0].outing_time?.slice(3, 5) ?? '00',
      end_hour: datas?.[0].arrival_time?.slice(0, 2) ?? '00',
      end_min: datas?.[0].arrival_time?.slice(3, 5) ?? '00',
    },
  );

  useEffect(() => {
    setTimeState({
      start_hour: datas?.[0].outing_time?.slice(0, 2) ?? '00',
      start_min: datas?.[0].outing_time?.slice(3, 5) ?? '00',
      end_hour: datas?.[0].arrival_time?.slice(0, 2) ?? '00',
      end_min: datas?.[0].arrival_time?.slice(3, 5) ?? '00',
    });
  }, [possibleTime]);

  const { start_hour, start_min, end_hour, end_min } = outingTimeState;
  const { mutate: mutateEditOutingTime } = useEditOutingTime(timeSlotId, {
    outing_time: `${start_hour}:${start_min}`,
    arrival_time: `${end_hour}:${end_min}`,
  });

  const onClickDelete = () => {
    closeModal();
    selectModal('DELETE_OUTING_TIME');
  };

  const onChange = (name: string, value: string) => {
    setTimeState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    switch (selectedDay) {
      case 'MONDAY':
        setDayToKo('월요일');
        break;
      case 'TUESDAY':
        setDayToKo('화요일');
        break;
      case 'WEDNESDAY':
        setDayToKo('수요일');
        break;
      case 'THURSDAY':
        setDayToKo('목요일');
        break;
      case 'FRIDAY':
        setDayToKo('금요일');
        break;
      case 'SATURDAY':
        setDayToKo('토요일');
        break;
      case 'SUNDAY':
        setDayToKo('일요일');
        break;
      default:
        break;
    }
  }, [selectedDay]);

  return (
    <>
      <Modal
        title="외출 시간 수정"
        inputList={[
          <>
            <_Container>
              <DropDown
                items={dayLongToArray}
                placeholder={''}
                onChange={(value) => onChange(value, 'dayOfWeek')}
                width={110}
                label="요일"
                value={dayToKo}
                disable={true}
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
          <Button color="primary" onClick={() => mutateEditOutingTime()}>
            수정
          </Button>,
        ]}
        close={closeModal}
      />
    </>
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
