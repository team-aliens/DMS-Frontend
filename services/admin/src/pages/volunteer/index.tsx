import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { InfoCard } from '@/components/volunteer/InfoCard';

export function Volunteer() {
  return (
    <>
      <WithNavigatorBar>
        <_Wrapper>
          <VolunteerHeader />
          <_BoxWrapper>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </_BoxWrapper>
        </_Wrapper>
      </WithNavigatorBar>
    </>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const _BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px;
  gap: 75px;
`;
