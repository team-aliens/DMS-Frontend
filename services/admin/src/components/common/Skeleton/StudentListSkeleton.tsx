import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export function StudentListSkeleton() {
  return (
    <_Wrapper>
      <_Filter>
        <Skeleton width="241px" height="44px" borderRadius="30px" />
        <_Buttons>
          <_ButtonContainer>
            <Skeleton width="116px" height="50px" borderRadius="4px" />
            <Skeleton width="77px" height="50px" borderRadius="4px" />
            <Skeleton width="116px" height="50px" borderRadius="4px" />
            <Skeleton width="99px" height="50px" borderRadius="4px" />
          </_ButtonContainer>
          <_Divider />
          <Skeleton width="106px" height="50px" borderRadius="4px" />
        </_Buttons>
      </_Filter>

      <_Container>
        <_SelectAllSection>
          <Skeleton width="24px" height="24px" />
          <Skeleton width="56px" height="22px" />
        </_SelectAllSection>

        <_StudentList>
          {Array.from({ length: 8 }).map((_, index) => (
            <StudentBoxSkeleton key={index} />
          ))}
        </_StudentList>
      </_Container>
    </_Wrapper>
  );
}

function StudentBoxSkeleton() {
  return (
    <_StudentBoxWrapper>
      <_LeftSection>
        <Skeleton width="24px" height="24px" />
        <Skeleton variant="circular" width="36px" height="36px" />
        <Skeleton width="50px" height="28px" />
        <Skeleton width="42px" height="28px" />
      </_LeftSection>

      <_CenterSection>
        <Skeleton width="45px" height="26px" borderRadius="12px" />
        <Skeleton width="45px" height="26px" borderRadius="12px" />
      </_CenterSection>

      <_RightSection>
        <Skeleton width="48px" height="25px" />
      </_RightSection>
    </_StudentBoxWrapper>
  );
}

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const _Wrapper = styled.div`
  width: 1030px;
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const _ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const _Filter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const _Divider = styled.div`
  width: 2px;
  height: 47px;
  background-color: ${({ theme }) => theme.color.gray2 || '#e0e0e0'};
`;

const _SelectAllSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 22px;
`;

const _StudentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _StudentBoxWrapper = styled.li`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.gray1 || '#f5f5f5'};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 8px;
  padding: 17px 40px 17px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > div:first-child {
    margin-right: 8px;
  }
`;

const _CenterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 24px;
  flex: 1;
  max-width: 45%;
`;

const _RightSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
