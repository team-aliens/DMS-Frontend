import {
  useMutation,
  useQuery,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getGeneralStudyApplications,
  getHeadStudyApplications,
  getManagerStudyApplications,
  getStudyApplicationTypes,
  patchStudyApplicationStatus,
} from '@/apis/daybreak/index';
import {
  GeneralStudyApplicationRequest,
  HeadStudyApplicationRequest,
  ManagerStudyApplicationRequest,
  PatchStudyApplicationStatusRequest,
} from '@/apis/daybreak/request';
import { queryKeys } from '@/utils/queryKeys';
import { useToast } from '@/hooks/useToast';
import { getCookie } from '@/utils/cookies';

export const useGeneralStudyApplication = (
  state: GeneralStudyApplicationRequest
) => {
  return useQuery(
    [queryKeys.일반자습신청조회, state],
    () =>
      getGeneralStudyApplications({
        ...state,
      }),
    {
      cacheTime: 0,
      staleTime: 0,
    }
  );
};

export const useHeadStudyApplication = (state: HeadStudyApplicationRequest) => {
  return useQuery(
    [queryKeys.부장자습신청조회, state],
    () =>
      getHeadStudyApplications({
        ...state,
      }),
    {
      cacheTime: 0,
      staleTime: 0,
    }
  );
};

export const useManagerStudyApplication = (
  state: ManagerStudyApplicationRequest
) => {
  return useQuery(
    [queryKeys.사감자습신청조회, state],
    () =>
      getManagerStudyApplications({
        ...state,
      }),
    {
      cacheTime: 0,
      staleTime: 0,
    }
  );
};

export const useStudyApplicationType = () => {
  const token = getCookie('access_token');
  return useQuery([queryKeys.자습유형조회], () => getStudyApplicationTypes(), {
    cacheTime: 0,
    staleTime: 0,
    enabled: !!token,
  });
};

export const useUpdateStudyStatus = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();
  return useMutation(
    (body: PatchStudyApplicationStatusRequest) =>
      patchStudyApplicationStatus(body),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '자습 신청 상태가 변경되었습니다.',
        });
        queryClient.invalidateQueries([queryKeys.일반자습신청조회]);
        queryClient.invalidateQueries([queryKeys.부장자습신청조회]);
        queryClient.invalidateQueries([queryKeys.사감자습신청조회]);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '자습 신청 상태 변경에 실패했습니다.',
        });
      },
    }
  );
};
