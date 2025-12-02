import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export function SurveyDetailSkeleton() {
  return (
    <>
      <_Header>
        <Skeleton width="40%" height="36px" />
        <Skeleton width="10%" height="20px" />
      </_Header>

      <_Options>
        {new Array(5).fill(null).map((_, i) => (
          <Skeleton
            key={`survey-detail-skel-${i}`}
            width="100%"
            height="20px"
          />
        ))}
      </_Options>
    </>
  );
}

const _Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const _Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const _Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
`;
