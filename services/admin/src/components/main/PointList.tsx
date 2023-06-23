import { Button, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import { DeletePointListModal } from '../modals/DeletePointList';
import { AllPointItem } from '@/components/main/DetailBox/PointItem';
import {
  useAllPointHistory,
  useCancelPointHistory,
  usePointOptionList,
} from '@/hooks/usePointsApi';
import { ViewPointOptionsModal } from '../modals/ViewPointOptionsModal';
import { useState } from 'react';
import { DeletePointOptionModal } from '../modals/DeletePointOption';
import {
  useDeletePointOption,
  useDownloadPointHistoryExcel,
} from '@/apis/points';
import { useToast } from '@/hooks/useToast';
import { usePointHistoryId } from '@/store/usePointHistoryId';
import { useSelectedPointOptionStore } from '@/store/useSelectedPointOption';
import { useQueryClient } from '@tanstack/react-query';

export function PointList() {
  const { modalState, closeModal, selectModal } = useModal();
  const [pointHistoryId] = usePointHistoryId((state) => [state.pointHistoryId]);
  const { data } = useAllPointHistory('ALL');

  const openPointOptionModal = () => selectModal('POINT_OPTIONS');

  const { data: allPointOptions } = usePointOptionList();

  const { toastDispatch } = useToast();

  const [selectedPointOption, setSelectedPointOption] =
    useSelectedPointOptionStore((state) => [
      state.selectedPointOption,
      state.setSelectedPointOption,
    ]);

  const queryClient = useQueryClient();

  const deletePointOptionAPI = useDeletePointOption(selectedPointOption, {
    onSuccess: () => {
      selectModal('POINT_OPTIONS');
      queryClient.invalidateQueries(['usePointList']);
      setSelectedPointOption('');
      toastDispatch({
        toastType: 'SUCCESS',
        actionType: 'APPEND_TOAST',
        message: '상/벌점 항목이 삭제되었습니다.',
      });
    },
    onError: () => {
      toastDispatch({
        toastType: 'ERROR',
        actionType: 'APPEND_TOAST',
        message: '상/벌점 항목 삭제를 실패했습니다.',
      });
    },
  });

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

const _Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 10px 0;
`;
