import styled from 'styled-components';
import { OutingApplication } from '@/apis/outing/response';
import { Text } from '@team-aliens/design-system';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/useModal';
import { CheckBox } from '@team-aliens/design-system';
import { useEffect, useState } from 'react';
import { updateOutingApplicationStatus } from '@/apis/outing';
import { useToast } from '@/hooks/useToast';

interface PropsType extends OutingApplication {
  isReqeustModal?: boolean;
  idList?: string[][];
  onChangeSelectSameId?: (id: string) => void;
}

export function MemberBox({
  isReqeustModal,
  id,
  outing_time,
  arrival_time,
  outing_type,
  student_gcn,
  student_name,
  is_approved,
  is_returned,
  idList,
  onChangeSelectSameId,
}: PropsType) {
  const [checkBoxState, setCheckBoxState] = useState({
    outingSelected: is_approved || false,
    arrivalSelected: is_returned || false,
    smsSelected: false,
  });

  const navigate = useNavigate();
  const { selectModal } = useModal();
  const { toastDispatch } = useToast();

  const openOutingApplyModal = () => selectModal('OUTING_REQUESTED');
  const openDoneModal = () => selectModal('OUTING_DONE');

  const modalPropsType = isReqeustModal ? openOutingApplyModal : openDoneModal;

  const handleNavigateAndOpenModal = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigate(`/outing/${id}`);
    modalPropsType();
  };

  const uniqueId = `${student_gcn}_${id}`;

  const idIndex = idList?.findIndex((group) => group.includes(id));
  const boxColor = idIndex % 2 === 0 ? '#F9F9F9' : '#B1D0FF';

  const onChangeCheckBox = async (
    field: 'outingSelected' | 'arrivalSelected',
  ) => {
    const updatedState = !checkBoxState[field];

    setCheckBoxState((prevState) => ({
      ...prevState,
      [field]: updatedState,
    }));

    if (onChangeSelectSameId) {
      onChangeSelectSameId(id);
    }

    try {
      await updateOutingApplicationStatus(
        id,
        field === 'outingSelected'
          ? updatedState
          : checkBoxState.outingSelected,
        field === 'arrivalSelected'
          ? updatedState
          : checkBoxState.arrivalSelected,
      );
      // 상태 업데이트가 성공적으로 완료되면 새로고침
      window.location.reload();
    } catch (error) {
      toastDispatch({
        toastType: 'ERROR',
        actionType: 'APPEND_TOAST',
        message: '외출 상태 변경에 실패했습니다.',
      });
      setCheckBoxState((prevState) => ({
        ...prevState,
        [field]: !updatedState,
      }));
    }
  };

  useEffect(() => {
    const storedSmsState = localStorage.getItem(`smsState_${uniqueId}`);
    const initialSmsSelected = storedSmsState
      ? JSON.parse(storedSmsState)
      : false;

    setCheckBoxState((prevState) => ({
      ...prevState,
      smsSelected: initialSmsSelected,
      outingSelected: is_approved || false,
      arrivalSelected: is_returned || false,
    }));
  }, [uniqueId, is_approved, is_returned]);

  const handleSmsCheckBoxChange = () => {
    setCheckBoxState((prevState) => {
      const newSmsState = !prevState.smsSelected;
      localStorage.setItem(`smsState_${uniqueId}`, JSON.stringify(newSmsState));
      return {
        ...prevState,
        smsSelected: newSmsState,
      };
    });
  };

  return (
    <_Wrapper>
      <InfoContainer boxColor={boxColor}>
        <_DetailWrapper>
          <Text
            cursor="pointer"
            className="gcd"
            size="bodyM"
            margin={['right', 24]}
            key={id}
            onClick={(e) => handleNavigateAndOpenModal(e, id)}
          >
            {student_gcn}
          </Text>
          <Text
            cursor="pointer"
            key={id}
            onClick={(e) => handleNavigateAndOpenModal(e, id)}
            className="name"
            size="bodyM"
            margin={['right', 126]}
          >
            {student_name}
          </Text>
          <Text
            cursor="pointer"
            key={id}
            onClick={(e) => handleNavigateAndOpenModal(e, id)}
            className="outing-type"
            size="bodyS"
            color="gray5"
            margin={['right', 134]}
          >
            {outing_type}
          </Text>
          <Text
            cursor="pointer"
            className="time"
            size="bodyS"
            margin={['right', 134]}
            key={id}
            onClick={(e) => handleNavigateAndOpenModal(e, id)}
          >
            {outing_time} ~ {arrival_time}
          </Text>
          <CheckBox
            onChange={() => onChangeCheckBox('outingSelected')}
            className="outing"
            size={24}
            // disabled={false}
            status={checkBoxState.outingSelected}
            margin={[0, 58, 0, 0]}
          />
          <CheckBox
            onChange={() => onChangeCheckBox('arrivalSelected')}
            className="arrival"
            size={24}
            status={checkBoxState.arrivalSelected}
            margin={[0, 91, 0, 0]}
          />
          <CheckBox
            onChange={handleSmsCheckBoxChange}
            className="sms"
            size={24}
            status={checkBoxState.smsSelected}
          />
        </_DetailWrapper>
      </InfoContainer>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const InfoContainer = styled.div<{ boxColor: string }>`
  width: 972px;
  border-radius: 6px;
  background-color: ${({ boxColor }) => boxColor};
  border: 1px solid #eeeeee;
  padding: 12px 25px;
`;

const _DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`;
