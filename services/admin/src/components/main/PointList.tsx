import { Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { AllPointItem } from '@/components/main/DetailBox/PointItem';
import { useAllPointHistory } from '@/hooks/usePointsApi';
import { useEffect } from 'react';

interface PropsType {
  isOpened?: boolean;
}

export function PointList({ isOpened }: PropsType) {
  const { data, refetch: refetchAllPointHistory } = useAllPointHistory('ALL');

  useEffect(() => {
    refetchAllPointHistory();
  }, [isOpened]);

  return (
    <_Wrapper>
      {data?.point_histories &&
        data.point_histories.map((res, i) => {
          const {
            point_history_id,
            student_name,
            student_gcn,
            point_name,
            point_score,
            point_type,
            date,
          } = res;
          const isSameDate = res.date === data?.point_histories[i - 1]?.date;
          return (
            <>
              {!isSameDate && (
                <Text margin={[30, 0, 9, 0]} color="gray6" size="bodyL">
                  {date}
                </Text>
              )}
              <AllPointItem
                key={point_history_id}
                point_history_id={point_history_id}
                student_name={student_name}
                student_gcn={student_gcn}
                point_name={point_name}
                point_score={point_score}
                point_type={point_type}
              />
            </>
          );
        })}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 418px;
`;
