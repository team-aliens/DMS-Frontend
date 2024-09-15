import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { InfoCard } from '@/components/volunteer/InfoCard';
import { Text } from '@team-aliens/design-system';

export function VolunteerApplication() {
  return (
    <WithNavigatorBar>
      <_Wrapper>
        <VolunteerHeader />
        <_VolunteerWrapper>
          <div>
            <InfoCard />
            <_StudentWrapper>
              <div>
                <Text size="bodyS" color="primary">
                  0000 이름
                </Text>
              </div>
            </_StudentWrapper>
          </div>
        </_VolunteerWrapper>
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const _VolunteerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  > div {
    display: flex;
    gap: 59px;
  }
`;

const _StudentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 34px;
  > div {
    width: 111px;
    height: 38px;
    border-radius: 8px;
    background-color: #f5f9ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
