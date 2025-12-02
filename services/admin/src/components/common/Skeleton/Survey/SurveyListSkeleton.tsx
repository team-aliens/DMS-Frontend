import styled from 'styled-components';
import { Skeleton } from '../Skeleton';

export function SurveyListSkeleton() {
  return (
    <>
      <_Button>
        <Skeleton width="123px" height="47px" borderRadius="4px" />
      </_Button>
      <_Grid>
        {new Array(3).fill(null).map((_, i) => (
          <_Card key={`survey-list-skel-${i}`}>
            <_CardBody>
              <Skeleton width="50%" height="22px" />
              <_CardDate>
                <Skeleton width="10%" height="22px" />
                <Skeleton width="80%" height="22px" />
              </_CardDate>
            </_CardBody>
            <_CardFooter>
              <Skeleton width="84px" height="47px" borderRadius="4px" />
              <Skeleton width="84px" height="47px" borderRadius="4px" />
              <Skeleton width="84px" height="47px" borderRadius="4px" />
            </_CardFooter>
          </_Card>
        ))}
      </_Grid>
    </>
  );
}

const _CardDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const _Button = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const _Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const _Card = styled.div`
  width: 428px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const _CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const _CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  gap: 4px;
`;
