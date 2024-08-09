import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  fetchOutingApplicationDetail,
  fetchOutingApplications,
  getOutingType,
  editOutingApplicationTime,
  getOutingApplicationTime,
  fetchOutingTimeSetting,
} from '@/apis/outing';
import { queryKeys } from '@/utils/queryKeys';
import {
  ApplyOutingRequestType,
  EditOutingRequestType,
  SettingOutingRequestType,
} from '@/apis/outing/request';
import { useToast } from '@/hooks/useToast';

export const useOutingApplicationDetail = (outingApplicationId: string) =>
  useQuery(
    [queryKeys.외출신청내역상세보기],
    () => {
      return fetchOutingApplicationDetail(outingApplicationId);
    },
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

export const useOutingApplications = ({
  date,
  student_name = '',
}: ApplyOutingRequestType) =>
  useQuery(
    [queryKeys.외출신청내역조회, student_name, date],
    () => fetchOutingApplications(date, student_name),
    {
      refetchOnWindowFocus: true,
    },
  );

export const useOutingTypeList = () =>
  useQuery(['useOutingType'], () => getOutingType(), {
    refetchOnWindowFocus: true,
  });

export const useEditOutingTime = (
  availableTimeId: string,
  body: EditOutingRequestType,
) => {
  const { toastDispatch } = useToast();

  return useMutation(() => editOutingApplicationTime(availableTimeId, body), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '외출 항목이 수정되었습니다.',
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    onError: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '외출 시간 수정에 실패했습니다.',
      });
    },
  });
};

export const useSetOutingTime = (body: SettingOutingRequestType) => {
  const { toastDispatch } = useToast();

  return useMutation(() => fetchOutingTimeSetting(body), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '잔류 신청 시간이 설정되었습니다.',
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  });
};

export const useGetPossibleTime = (day: string) =>
  useQuery([`useGetPossibleTime/${day}`], () => getOutingApplicationTime(day));
