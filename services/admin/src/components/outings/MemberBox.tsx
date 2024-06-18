import styled from 'styled-components';
import { OutingApplication } from '@/apis/outing/response';
import { Text } from '@team-aliens/design-system';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/useModal';

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
  outing_companion_count,
}: PropsType) {
  const navigate = useNavigate();
  const { selectModal } = useModal();

  const openOutingApplyModal = () => selectModal('OUTING_REQUESTED');
  const openDoneModal = () => selectModal('OUTING_DONE');

  const modalPropsType = isReqeustModal ? openOutingApplyModal : openDoneModal;

  return (
    <_Wrapper onClick={modalPropsType}>
      <InfoContainer
        key={outing_application_id}
        onClick={() => navigate(`/outing/${outing_application_id}`)}
      >
        <_DetailWrapper>
          <Text className="name" size="bodyM" margin={['right', 22]}>
            {student_name} 외 {outing_companion_count}명
          </Text>
          <Text
            className="outing-type"
            size="bodyS"
            color="gray5"
            margin={['right', 70]}
          >
            {outing_type}
          </Text>
          <Text className="time" size="bodyS">
            {outing_time} ~ {arrival_time}
          </Text>
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
  width: 452px;
  border-radius: 6px;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  padding: 12px 25px;
  :hover {
    border: 2px solid rgb(61, 138, 255);
  }
  :active {
    border: 2px solid rgb(61, 138, 255);
  }
`;

const _DetailWrapper = styled.div`
  display: flex;
  align-items: center;
`;
