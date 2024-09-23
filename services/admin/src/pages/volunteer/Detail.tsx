import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { StudentInfo } from '@/components/volunteer/StudentInfo';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';

export function VolunteerDetail() {
  return (
    <WithNavigatorBar>
      <_Wrapper>
        <VolunteerHeader />
        <_StudentInfoWrapper>
          <StudentInfo />
          <StudentInfo />
          <StudentInfo />
        </_StudentInfoWrapper>
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const _StudentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
