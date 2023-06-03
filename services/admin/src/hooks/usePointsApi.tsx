import {
  MutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  cancelPointHistory,
  getAllPointHistory,
  getAllPoints,
  getRecentStudentPointHistory,
  getStudentPointHistory,
  PointType,
} from '@/apis/points';
import { usePointHistoryList } from './usePointHistoryList';
import { useToast } from './useToast';
import { useModal } from './useModal';
import { RecentStudentPointResponse } from '@/apis/points/response';

export const useAllPointHistory = (pointType: PointType) =>
  useQuery(
    ['getAllPointHistory', pointType],
    () => getAllPointHistory(pointType),
    {
      refetchOnWindowFocus: true,
    },
  );

export const useStudentPointHistory = (
  student_id: string,
  isActive?: boolean,
  page?: number,
  size?: number,
) => {
  const { addStudentPointHistory } = usePointHistoryList();
  return useQuery(
    [`getStudentPointHistory`, student_id],
    () => getStudentPointHistory(student_id, page, size),
    {
      refetchOnWindowFocus: true,
      onSuccess: (res) => {
        addStudentPointHistory(res?.point_histories);
      },
      enabled: isActive,
    },
  );
};

export const useRecentStudentPointHistory = (
  student_id: string,
  isActive?: boolean,
  page?: number,
  size?: number,
) => {
  return useQuery(
    [`getStudentPointHistory`, student_id],
    () => getRecentStudentPointHistory(student_id, page, size),
    {
      refetchOnWindowFocus: true,
      enabled: isActive && Boolean(student_id),
    },
  );
};

export const usePointOptionList = () =>
  useQuery(['usePointList'], () => getAllPoints(), {
    refetchOnWindowFocus: true,
  });

export const useCancelPointHistory = (
  point_history_id: string,
  options?: MutationOptions,
) => {
  const { toastDispatch } = useToast();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  return useMutation(() => cancelPointHistory(point_history_id), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries(['getAllPointHistory']);
      queryClient.invalidateQueries(['getStudentPointHistory']);
      queryClient.invalidateQueries(['getStudentDetail']);
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '상/벌점 내역이 취소 되었습니다',
      });
      closeModal();
    },
  });
};
