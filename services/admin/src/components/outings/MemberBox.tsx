import styled from 'styled-components';
import { OutingApplication } from '@/apis/outing/response';
import { Text } from '@team-aliens/design-system';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/useModal';
import { CheckBox } from '@team-aliens/design-system';
import { useState } from 'react';

interface PropsType extends OutingApplication {
  isReqeustModal?: boolean;
}

export function MemberBox({
  isReqeustModal,
  outing_application_id,
  outing_time,
  arrival_time,
  outing_type,
  student_name,
}: PropsType) {
  const [outingSelected, setOutingSelected] = useState<boolean>(false);
  const [arrivalSelected, setArrivalSelected] = useState<boolean>(false);
  const [smsSelected, setSmsSelected] = useState<boolean>(false);
  const navigate = useNavigate();
  const { selectModal } = useModal();

  const openOutingApplyModal = () => selectModal('OUTING_REQUESTED');
  const openDoneModal = () => selectModal('OUTING_DONE');

  const modalPropsType = isReqeustModal ? openOutingApplyModal : openDoneModal;

  const onChangeOutingCheckBox = () => {
    setOutingSelected(!outingSelected);
  }

  const onChangeArrivalCheckBox = () => {
    setArrivalSelected(!arrivalSelected);
  }

  const onChangeSmsCheckBox = () => {
    setSmsSelected(!smsSelected);
  }
  

  return (
    <_Wrapper>
      <InfoContainer>
        <_DetailWrapper>
          <Text 
            cursor='pointer'
            className='gcd' 
            size='bodyM' 
            margin={['right', 24]}
            key={outing_application_id}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/outing/${outing_application_id}`);
              modalPropsType();
            }}
          >
            2214
          </Text>
          <Text 
            cursor='pointer'
            key={outing_application_id}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/outing/${outing_application_id}`);
              modalPropsType();
            }}
            className="name" 
            size="bodyM" 
            margin={['right', 126]}
          >
            {student_name}
          </Text>
          <Text
            cursor='pointer'
            key={outing_application_id}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/outing/${outing_application_id}`);
              modalPropsType();
            }}
            className="outing-type"
            size="bodyS"
            color="gray5"
            margin={['right', 134]}
          >
            {outing_type}
          </Text>
          <Text 
            cursor='pointer'
            className="time" 
            size="bodyS" 
            margin={['right', 134]}
            key={outing_application_id}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/outing/${outing_application_id}`);
              modalPropsType();
            }}
          >
            {outing_time} ~ {arrival_time}
          </Text>
          <CheckBox 
            onChange={onChangeOutingCheckBox}
            className='outing' 
            size={24}
            status={outingSelected}
            margin={[0,58,0,0]}
          />
          <CheckBox 
            onChange={onChangeArrivalCheckBox}
            className='arrival' 
            size={24}
            status={arrivalSelected}
            margin={[0,91,0,0]}
          />
          <CheckBox 
            onChange={onChangeSmsCheckBox}
            className='sms' 
            size={24}
            status={smsSelected}
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

const InfoContainer = styled.div`
  width: 972px;
  border-radius: 6px;
  background-color: #F9F9F9;
  border: 1px solid #eeeeee;
  padding: 12px 25px;
`;

const _DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`;
