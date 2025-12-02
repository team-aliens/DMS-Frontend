import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export const RemainsSkeleton = () => {
  return (
    <_Wrapper>
      <_Header>
        <Skeleton width="86px" height="47px" borderRadius="4px" />
        <_ButtonContainer>
          <Skeleton width="140px" height="47px" borderRadius="4px" />
          <Skeleton width="86px" height="47px" borderRadius="4px" />
        </_ButtonContainer>
      </_Header>
      <_LayoutContainer>
        {new Array(5).fill(null).map((_, i) => (
          <_Layout key={`remains-skel-${i}`}>
            <_LayoutHeader>
              <Skeleton width="20%" height="27px" />
              <Skeleton width="10px" height="30px" />
            </_LayoutHeader>
            <Skeleton width="40%" height="26px" />
          </_Layout>
        ))}
      </_LayoutContainer>
    </_Wrapper>
  );
};

const _LayoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 20px 0 40px;
  width: 1030px;
  min-height: 180px;
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  gap: 17px;
`;

const _LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const _ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const _Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
