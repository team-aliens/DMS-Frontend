import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export const VolunteerCurrentSkeleton = () => {
  return (
    <_Wrapper>
      <_ButtonContainer>
        <Skeleton width="85px" height="47px" borderRadius="4px" />
        <Skeleton width="85px" height="47px" borderRadius="4px" />
      </_ButtonContainer>
      {new Array(5).fill(null).map((_, i) => (
        <_Contents>
          <_VolunteerCard>
            <_Header>
              <Skeleton width="40%" height="20px" />
              <Skeleton width="10%" height="20px" />
            </_Header>
            <_Footer>
              <Skeleton width="30%" height="20px" />
            </_Footer>
          </_VolunteerCard>
          <_StudentContainer>
            {new Array(3).fill(null).map((_, i) => (
              <Skeleton width="120px" height="40px" borderRadius="8px" />
            ))}
          </_StudentContainer>
        </_Contents>
      ))}
    </_Wrapper>
  );
};

const _StudentContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const _Contents = styled.div`
  display: flex;
  gap: 59px;
`;

const _ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const _Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const _Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const _Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const _VolunteerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 280px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  padding: 20px 20px 14px 20px;
`;
