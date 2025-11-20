import styled from 'styled-components';
import { Skeleton } from './Skeleton';

export function DetailBoxSkeleton() {
  return (
    <_DetailBox>
      <_ProfileSection>
        <Skeleton variant="circular" width="100px" height="100px" />
        <_ProfileInfo>
          <_NameContainer>
            <Skeleton width="61px" height="34px" />
            <Skeleton width="51px" height="34px" />
          </_NameContainer>
          <_RoomContainer>
            <Skeleton width="48px" height="28px" />
            <Skeleton width="60px" height="30px" borderRadius="24px" />
          </_RoomContainer>
        </_ProfileInfo>
      </_ProfileSection>

      <_PointWrapper>
        <Skeleton width="172px" height="47px" borderRadius="4px" />
        <Skeleton width="172px" height="47px" borderRadius="4px" />
      </_PointWrapper>

      <_Section>
        <Skeleton width="85px" height="22px" />
        <_MateList>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              key={index}
              width="80px"
              height="50px"
              borderRadius="4px"
            />
          ))}
        </_MateList>
      </_Section>

      <_Section>
        <Skeleton width="56px" height="22px" />
        <_MateList>
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton
              key={index}
              width="80px"
              height="26px"
              borderRadius="13px"
            />
          ))}
        </_MateList>
      </_Section>

      <_Section>
        <Skeleton width="44px" height="22px" />
        <_PointList>
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              key={index}
              width="357px"
              height="50px"
              borderRadius="4px"
            />
          ))}
        </_PointList>
      </_Section>
    </_DetailBox>
  );
}

const _NameContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const _RoomContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const _DetailBox = styled.div`
  position: relative;
  margin-top: 43px;
  padding: 60px 40px;
  width: 436px;
  min-height: 485px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  overflow: scroll;
  gap: 40px;
`;

const _ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const _ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _PointWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const _PointBox = styled.div`
  background-color: ${({ theme }) => theme.color.gray2 || '#f5f5f5'};
  border-radius: 4px;
`;

const _Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _MateList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const _PointList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
`;
