import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export function NoticeDetailSkeleton() {
  return (
    <_Wrapper>
      <_Title>
        <Skeleton width="60%" height="32px" />

        <_Summary>
          <Skeleton width="80px" height="20px" />
          <_Actions>
            <Skeleton width="82px" height="47px" borderRadius="4px" />
            <Skeleton width="82px" height="47px" borderRadius="4px" />
          </_Actions>
        </_Summary>
      </_Title>

      <_Content>
        {new Array(6).fill(null).map((_, i) => (
          <Skeleton
            key={`p-${i}`}
            width="100%"
            height="18px"
            borderRadius="4px"
          />
        ))}
      </_Content>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 1030px;
  margin: 160px auto 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const _Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const _Summary = styled.div`
  display: flex;
  padding-bottom: 22px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  align-items: center;
  > div:first-child {
    margin-right: auto;
  }
`;

const _Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
