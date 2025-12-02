import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export const VolunteerDetailSkeleton = () => {
  return (
    <_Wrapper>
      <_ButtonContainer>
        <Skeleton width="85px" height="47px" borderRadius="4px" />
        <Skeleton width="85px" height="47px" borderRadius="4px" />
      </_ButtonContainer>
      <_StudentInfoContainer>
        {new Array(5).fill(null).map((_, i) => (
          <_StudentInfo key={i}>
            <Skeleton width="10%" height="20px" />
            <_InfoButtonContainer>
              <Skeleton width="80px" height="50px" borderRadius="4px" />
              <Skeleton width="80px" height="50px" />
            </_InfoButtonContainer>
          </_StudentInfo>
        ))}
      </_StudentInfoContainer>
    </_Wrapper>
  );
};

const _InfoButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const _Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const _ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;
const _StudentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _StudentInfo = styled.div`
  width: 990px;
  height: 82px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
