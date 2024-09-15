import { Button, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function VolunteerHeader() {
  return (
    <>
      <_Wrapper>
        <div></div>
        <_ButtonWrapper>
          <Button>봉사 추가</Button>
        </_ButtonWrapper>
      </_Wrapper>
    </>
  );
}

const _Wrapper = styled.div`
  display: flex;
  width: 990px;
  margin-top: 100px;
  align-items: center;
  margin-bottom: 40px;
`;

const _ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;
