import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import {
  OutingStatusType,
  fetchOutingApplicationDetail,
  fetchOutingApplications,
  updateOutingApplicationStatus,
} from '@/apis/outing';
import { queryKeys } from '@/utils/queryKeys';
import { useToast } from '@/hooks/useToast';

export const useOutingApplicationDetail = (outingApplicationId: string) =>
  useQuery([queryKeys.외출신청내역상세보기], () =>
    fetchOutingApplicationDetail(outingApplicationId),
  );

export const useOutingApplications = (
  outing_status: OutingStatusType,
  name: string,
  date: string,
) =>
  useQuery([queryKeys.외출신청내역조회], () =>
    fetchOutingApplications(outing_status, name, date),
  );

export const useUpdateOutingApplicationStatus = (
  outingApplicationId: string,
  outing_status: OutingStatusType,
) => {
  const { toastDispatch } = useToast();

  return useMutation(
    () => updateOutingApplicationStatus(outingApplicationId, outing_status),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '외출 신청 상태 변경에 성공하였습니다',
        });
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '외출 신청 상태 변경에 성공하였습니다',
        });
      },
    },
  );
};
