import styled from 'styled-components';
import { Text, Button } from '@team-aliens/design-system';

export function StudentInfo() {
  return (
    <_Wrapper>
      <Text size="bodyM">이름</Text>
      <_ButtonWrapper>
        <Button kind="outline">거절</Button>
        <Button>수락</Button>
      </_ButtonWrapper>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
  width: 990px;
  height: 82px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  align-items: center;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;
