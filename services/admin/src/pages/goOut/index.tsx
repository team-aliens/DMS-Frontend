import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import styled from 'styled-components';
import { Button } from '@team-aliens/design-system';

export function Outing() {
  return (
    <WithNavigatorBar>
      <_Wrapper>
        <Button>모달 열기</Button>
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1030px;
  margin-bottom: 150px;
`;
