import { Button, Input, Modal, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import { useForm } from '@/hooks/useForm';
import { useGetOutingListExcel } from '@/apis/outing';

interface ITimeState {
  startYear: string;
  startMonth: string;
  startDays: string;
  endYear: string;
  endMonth: string;
  endDays: string;
}

interface IProps {
  todayDate: string;
}

export default function OutingListExcel({ todayDate }: IProps) {
  const { closeModal } = useModal();
  const {
    state: timeState,
    setState: setTimeState,
    onHandleChange: onChange,
  } = useForm<ITimeState>({
    startYear: '',
    startMonth: '',
    startDays: '',
    endYear: '',
    endMonth: '',
    endDays: '',
  });

  const regexFunction = (date: string) => {
    if (!/^[0-9\b -]{0,13}$/.test(date)) {
      alert('숫자만 입력해주세요.');
      return '';
    }
    if (date.length >= 7) {
      return date.replace(/^(.{4})(.{2})(.*)$/, '$1-$2-$3');
    }
    if (date.length >= 5) {
      return date.replace(/^(.{4})(.*)$/, '$1-$2');
    }
    return date;
  };

  const startDateInput = `${timeState.startYear}${timeState.startMonth}${timeState.startDays}`;
  const endDateInput = `${timeState.endYear}${timeState.endMonth}${timeState.endDays}`;

  const startDate = regexFunction(startDateInput) || '2024-06-01';
  const endDate = regexFunction(endDateInput) || todayDate;

  const outingListExcel = useGetOutingListExcel({
    startDates: startDate,
    endDates: endDate,
  });

  const onClick = () => {
    outingListExcel.mutate();
    closeModal();
  };

  return (
    <Modal
      title="엑셀 출력 기간"
      close={closeModal}
      inputList={[
        <>
          <Text size="bodyS" color="error">
            값을 입력하지 않으면 6월 1일 ~ <strong>설정한 날짜</strong>로 입력
            됩니다.
          </Text>
          <_TimeWrapper>
            <Input
              name="startYear"
              value={timeState.startYear}
              onChange={onChange}
              width={65}
              limit={4}
              placeholder="YYYY"
            />
            <p className="day">/</p>
            <Input
              name="startMonth"
              value={timeState.startMonth}
              onChange={onChange}
              width={55}
              limit={2}
              placeholder="MM"
            />
            <p className="day">/</p>
            <Input
              name="startDays"
              value={timeState.startDays}
              onChange={onChange}
              width={55}
              limit={2}
              placeholder="DD"
            />
            <p className="to">~</p>
            <Input
              name="endYear"
              value={timeState.endYear}
              onChange={onChange}
              width={65}
              limit={4}
              placeholder="YYYY"
            />
            <p className="day">/</p>
            <Input
              name="endMonth"
              value={timeState.endMonth}
              onChange={onChange}
              width={55}
              limit={2}
              placeholder="MM"
            />
            <p className="day">/</p>
            <Input
              name="endDays"
              value={timeState.endDays}
              onChange={onChange}
              width={55}
              limit={2}
              placeholder="DD"
            />
          </_TimeWrapper>
        </>,
      ]}
      buttonList={[
        <Button key={'okay'} color="primary" onClick={onClick}>
          출력
        </Button>,
      ]}
    >
      <_DateWrapper>
        <Text size="bodyS" color="gray6">
          {startDate} {startDate.length >= 10 && `~` + ` ${endDate}`}
        </Text>
      </_DateWrapper>
    </Modal>
  );
}

const _TimeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  .day {
    color: #555555;
    font-weight: 400;
    font-size: 14px;
  }
  > .to {
    margin: 0 10px;
  }
  > div > label > input {
    text-align: center;
  }
`;

const _DateWrapper = styled.div`
  position: absolute;
  top: 515px;
`;
