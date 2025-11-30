import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export const VolunteerListSkeleton = () => {
  return (
    <_Wrapper>
      <_ButtonContainer>
        <Skeleton width="85px" height="47px" borderRadius="4px" />
        <Skeleton width="85px" height="47px" borderRadius="4px" />
      </_ButtonContainer>
      <_CardContainer>
        {new Array(5).fill(null).map((_, i) => (
          <_VolunteerCard key={`volunteer-skel-${i}`}>
            <_Header>
              <Skeleton width="40%" height="20px" />
              <Skeleton width="10%" height="20px" />
            </_Header>
            <_Footer>
              <Skeleton width="30%" height="20px" />
              <_Icons>
                <Skeleton width="24px" height="24px" />
                <Skeleton width="24px" height="24px" />
              </_Icons>
            </_Footer>
          </_VolunteerCard>
        ))}
      </_CardContainer>
    </_Wrapper>
  );
};

const _Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray4};
  padding-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const _Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const _Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const _ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const _Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const _CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 75px;
  row-gap: 50px;
  align-items: start;
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
