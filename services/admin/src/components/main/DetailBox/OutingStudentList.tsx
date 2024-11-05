import styled from 'styled-components';
import { Text } from '@team-aliens/design-system';
import { OutingApplicationDetailResponse } from '@/apis/outing/response';

interface ListPropsType {
  detailInfoData: OutingApplicationDetailResponse;
}

export function OutingStudentList({ detailInfoData }: ListPropsType) {
  return (
    <>
      <_Wrapper>
        <_CenterWrapper>
          <Text size="bodyM">{detailInfoData?.student_name}</Text>
          <Text size="bodyS" color="gray5">
            {detailInfoData?.student_gcn}
          </Text>
          <Text size="bodyS" color="primary">
            신청자
          </Text>
        </_CenterWrapper>
        <div style={{marginLeft: 'auto'}}>
          <Text size="bodyS" color="gray5">
            {detailInfoData?.student_room_number}호
          </Text>
        </div>
      </_Wrapper>
      {detailInfoData?.students.map((item) => (
        <_Wrapper key={item.id}>
          <_CenterWrapper>
            <Text size="bodyM">{item.student_name}</Text>
            <Text size="bodyS" color="gray5">
              {item.student_gcn}
            </Text>
          </_CenterWrapper>
          <div style={{marginLeft: 'auto'}}>
              <Text size="bodyS" color="gray5">
                {item.room_number}호
              </Text>
            </div>
        </_Wrapper>
      ))}
    </>
  );
}

const _Wrapper = styled.div<{
  OptionSelectedCheck?: boolean;
}>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 13px 20px;
  background-color: ${({ theme }) => theme.color.gray2};
  border: 2px solid
    ${({ OptionSelectedCheck }) =>
      OptionSelectedCheck ? '#3D8AFF' : '#EEEEEE'};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const _CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
