import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export function NoticeListSkeleton() {
  return (
    <>
      {new Array(3).fill(null).map((_, i) => (
        <_SkeletonItem key={`notice-skel-${i}`}>
          <Skeleton width="200px" height="20px" borderRadius="4px" />
          <Skeleton width="80px" height="16px" borderRadius="4px" />
        </_SkeletonItem>
      ))}
    </>
  );
}

const _SkeletonItem = styled.li`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
