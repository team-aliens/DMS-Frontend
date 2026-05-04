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
import { setCookie, getCookie } from '@/utils/cookies';

export const commonQueryOptions = (pageSize: number = 10) => ({
  cacheTime: 0,
  staleTime: 0,
  getNextPageParam: (lastPage: any, allPages: any[]) => {
    const currentItems = lastPage.applications || [];

    if (currentItems.length <= pageSize || currentItems.length === 0) {
      return undefined;
    }

    return allPages.length;
  },
});

export const useGeneralStudyApplication = (
  state: GeneralStudyApplicationRequest
) => {
  return useInfiniteQuery(
    [queryKeys.일반자습신청조회, state],
    () => getGeneralStudyApplications(state),
    {
      ...commonQueryOptions(state.size),
    }
  );
};

export const useHeadStudyApplication = (state: HeadStudyApplicationRequest) => {
  const token = getCookie('access_token');
  return useInfiniteQuery(
    [queryKeys.부장자습신청조회, state],
    () => getHeadStudyApplications(state),
    {
      ...commonQueryOptions(state.size),
    }
  );
};

export const useManagerStudyApplication = (
  state: ManagerStudyApplicationRequest
) => {
  return useInfiniteQuery(
    [queryKeys.사감자습신청조회, state],
    () => getManagerStudyApplications(state),
    {
      ...commonQueryOptions(state.size),
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
