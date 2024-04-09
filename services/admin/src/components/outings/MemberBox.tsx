import styled from 'styled-components';
import { OutingApplication } from '@/apis/outing/response';
import { Text } from '@team-aliens/design-system';
import { useNavigate } from 'react-router-dom';
import { OutingStatusType } from '@/apis/outing/index';
import { useRef } from 'react';

interface PropsType {
  outingApplyList: OutingApplication[];
}

export function MemberBox({ outingApplyList }: PropsType) {
  const navigate = useNavigate();

  return (
    <_Wrapper>
      {outingApplyList?.map((item) => (
        <InfoContainer
          key={item.outing_application_id}
          onClick={() => navigate(`/outing/${item.outing_application_id}`)}
        >
          <_DetailWrapper>
            <Text className="name" size="bodyM" margin={['right', 22]}>
              {item.student_name}
            </Text>
            <Text
              className="outing-type"
              size="bodyS"
              color="gray5"
              margin={['right', 70]}
            >
              {item.outing_type}
            </Text>
            <Text className="time" size="bodyS">
              {item.outing_time} ~ {item.arrival_time}
            </Text>
          </_DetailWrapper>
        </InfoContainer>
      ))}
    </_Wrapper>
  );
}

const _Wrapper = styled.li`
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
