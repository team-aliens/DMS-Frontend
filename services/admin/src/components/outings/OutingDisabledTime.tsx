import {
  getOutingApplicationTime,
  updateOutingApplicationAction,
} from '@/apis/outing';
import { Modal, DropDown, Button } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/useToast';

interface TimeButtonProps {
  isSelected: boolean;
}

export default function OutingDisabledTime() {
  const { closeModal } = useModal();
  const [selectedDay, setSelectedDay] = useState('');
  const [disabledTimes, setDisabledTimes] = useState([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const daysOfWeek = [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ];
  const daysOfWeekMap = {
    월요일: 'MONDAY',
    화요일: 'TUESDAY',
    수요일: 'WEDNESDAY',
    목요일: 'THURSDAY',
    금요일: 'FRIDAY',
    토요일: 'SATURDAY',
    일요일: 'SUNDAY',
  };

  const { toastDispatch } = useToast();

  const fetchDisabledTimes = (dayOfWeek) => {
    getOutingApplicationTime(dayOfWeek)
      .then((response) => {
        const times = response.data.outing_available_times.map((time) => ({
          id: time.id,
          timeRange: `${time.outing_time} ~ ${time.arrival_time}`,
        }));
        setDisabledTimes(times);
      })
      .catch((error) => {
        setDisabledTimes([]);
      });
  };

  const handleDayChange = (value) => {
    setSelectedDay(value);
  };

  const handleTimeButtonClick = (id) => {
    setSelectedId(id);
  };

  const handleOutingDisable = () => {
    if (selectedDay && selectedId !== null) {
      updateOutingApplicationAction(selectedId.toString())
        .then(() => {
          toastDispatch({
            actionType: 'APPEND_TOAST',
            toastType: 'SUCCESS',
            message: '외출 시간이 성공적으로 비활성화되었습니다.',
          });
        })
        .catch(() => {
          toastDispatch({
            actionType: 'APPEND_TOAST',
            toastType: 'ERROR',
            message: '외출 시간 비활성화에 실패했습니다.',
          });
        });
    } else {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '요일과 시간을 선택해주세요.',
      });
    }
  };

  useEffect(() => {
    if (selectedDay) {
      fetchDisabledTimes(daysOfWeekMap[selectedDay]);
    }
  }, [selectedDay]);

  return (
    <>
      <Modal
        title="외출 비활성화"
        inputList={[
          <>
            <_Container>
              <DropDown
                items={daysOfWeek}
                placeholder={''}
                onChange={(value) => handleDayChange(value)}
                width={110}
                label="요일"
              />
            </_Container>
            <div style={{ position: 'relative' }}>
              <_Label>시간</_Label>
              <_ButtonWrapper>
                {disabledTimes.length > 0 ? (
                  disabledTimes.map(({ id, timeRange }) => (
                    <_TimeButton
                      key={id}
                      onClick={() => handleTimeButtonClick(id)}
                      isSelected={id === selectedId}
                    >
                      {timeRange}
                    </_TimeButton>
                  ))
                ) : (
                  <_NoTimes>외출 비활성화를 할 시간이 없습니다.</_NoTimes>
                )}
              </_ButtonWrapper>
            </div>
          </>,
        ]}
        buttonList={[
          <Button kind="outline" color="gray" onClick={handleOutingDisable}>
            외출 비활성화
          </Button>,
        ]}
        close={closeModal}
      />
    </>
  );
}

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

const _ButtonWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  padding-left: 25px;
  gap: 4px;
`;

const _TimeButton = styled.button<TimeButtonProps>`
  width: 112px;
  height: 34px;
  border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid #DDDDDD')};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#1070FF' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;

const _NoTimes = styled.div`
  color: #999;
  font-size: 14px;
`;