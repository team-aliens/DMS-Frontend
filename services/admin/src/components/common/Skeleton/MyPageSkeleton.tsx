import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export function MyPageSkeleton() {
  return (
    <_Wrapper>
      <Skeleton width="300px" height="36px" borderRadius="8px" />
      <_Container>
        <_CardWrapper>
          <_OptionContainer>
            <_VerificationCard>
              <_VerificationHeader>
                <Skeleton width="87px" height="34px" borderRadius="4px" />
                <Skeleton width="113px" height="50px" borderRadius="4px" />
              </_VerificationHeader>
              <Skeleton width="120px" height="40px" borderRadius="8px" />
            </_VerificationCard>

            <_OptionBtn>
              <_PasswordChangeSkeleton>
                <Skeleton width="120px" height="24px" borderRadius="4px" />
                <Skeleton width="24px" height="24px" borderRadius="4px" />
              </_PasswordChangeSkeleton>
              <_LogoutSkeleton>
                <Skeleton width="80px" height="24px" borderRadius="4px" />
              </_LogoutSkeleton>
            </_OptionBtn>
          </_OptionContainer>

          <_ConfirmationCard>
            <_ConfirmationCardContainer>
              <_ConfirmationCardHeader>
                <Skeleton width="87px" height="34px" />
                <Skeleton width="149px" height="47px" borderRadius="4px" />
              </_ConfirmationCardHeader>

              <Skeleton width="200px" height="28px" />
            </_ConfirmationCardContainer>
            <_ConfirmationCardAnswer>
              <Skeleton width="41px" height="34px" />
              <Skeleton width="100px" height="28px" />
            </_ConfirmationCardAnswer>
          </_ConfirmationCard>
        </_CardWrapper>
        <_StudentExcelWrapper>
          <_StudentIssuanceSkeleton>
            <Skeleton width="100px" height="24px" borderRadius="4px" />
            <Skeleton width="24px" height="24px" borderRadius="4px" />
          </_StudentIssuanceSkeleton>
          <_StudentEditWrapper>
            <_StudentEditSkeleton>
              <Skeleton width="120px" height="24px" borderRadius="4px" />
            </_StudentEditSkeleton>
            <_StudentEditSkeleton>
              <Skeleton width="120px" height="24px" borderRadius="4px" />
            </_StudentEditSkeleton>
          </_StudentEditWrapper>
        </_StudentExcelWrapper>
      </_Container>
    </_Wrapper>
  );
}

const _ConfirmationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const _ConfirmationCardAnswer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const _ConfirmationCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

const _Wrapper = styled.div`
  margin: 160px 0 0 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const _CardWrapper = styled.div`
  display: flex;
  gap: 27px;
`;

const _VerificationCard = styled.div`
  width: 500px;
  padding: 32px 32px 39px 40px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const _VerificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _VerificationContent = styled.div`
  display: flex;

  gap: 20px;
`;

const _OptionBtn = styled.div`
  display: flex;
  gap: 17px;
`;

const _PasswordChangeSkeleton = styled.div`
  width: 233px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  height: 70px;
`;

const _LogoutSkeleton = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  padding-left: 24px;
  border-radius: 4px;
`;

const _ConfirmationCard = styled.div`
  width: 500px;
  padding: 40px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const _StudentExcelWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const _StudentIssuanceSkeleton = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
`;

const _StudentEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 17px;
`;

const _StudentEditSkeleton = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  width: 233px;
`;
