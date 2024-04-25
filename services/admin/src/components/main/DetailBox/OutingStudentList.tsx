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
          <div>
            <Text size="bodyS" color="gray5">
              {detailInfoData?.student_room_number}
            </Text>
          </div>
          <Text size="bodyS" color="primary">
            신청자
          </Text>
        </_CenterWrapper>
      </_Wrapper>
      {detailInfoData?.students.map((item) => (
        <_Wrapper key={item.id}>
          <_CenterWrapper>
            <Text size="bodyM">{item.student_name}</Text>
            <Text size="bodyS" color="gray5">
              {item.student_gcn}
            </Text>
            <div>
              <Text size="bodyS" color="gray5">
                {item.room_number}
              </Text>
            </div>
          </_CenterWrapper>
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
  padding-left: 20px;
`;
