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
  getStudyApplicationHistory,
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

/** 자습 신청 목록은 한 번에 이만큼씩 받아 무한스크롤로 이어 붙인다 */
export const STUDY_APPLICATION_PAGE_SIZE = 20;

/** 응답에 총 개수가 없어서, 요청한 만큼 다 왔으면 다음 장이 있다고 본다 */
const getNextPageParam = (
  lastPage: { applications: unknown[] },
  allPages: unknown[]
) =>
  lastPage.applications.length < STUDY_APPLICATION_PAGE_SIZE
    ? undefined
    : allPages.length;

const infiniteOptions = {
  getNextPageParam,
  cacheTime: 0,
  staleTime: 0,
} as const;

export const useGeneralStudyApplication = (
  state: GeneralStudyApplicationRequest
) => {
  return useInfiniteQuery(
    [queryKeys.일반자습신청조회, state],
    ({ pageParam = 0 }) =>
      getGeneralStudyApplications({
        ...state,
        page: pageParam,
        size: STUDY_APPLICATION_PAGE_SIZE,
      }),
    infiniteOptions
  );
};

export const useHeadStudyApplication = (state: HeadStudyApplicationRequest) => {
  return useInfiniteQuery(
    [queryKeys.부장자습신청조회, state],
    ({ pageParam = 0 }) =>
      getHeadStudyApplications({
        ...state,
        page: pageParam,
        size: STUDY_APPLICATION_PAGE_SIZE,
      }),
    infiniteOptions
  );
};

export const useManagerStudyApplication = (
  state: ManagerStudyApplicationRequest
) => {
  return useInfiniteQuery(
    [queryKeys.사감자습신청조회, state],
    ({ pageParam = 0 }) =>
      getManagerStudyApplications({
        ...state,
        page: pageParam,
        size: STUDY_APPLICATION_PAGE_SIZE,
      }),
    infiniteOptions
  );
};

/** 학생 한 명의 새벽자습 이력. 가장 최신(진행 중) 신청이 맨 앞에 온다 */
export const useStudyApplicationHistory = (studentId?: string) => {
  return useQuery(
    [queryKeys.자습이력조회, studentId],
    () => getStudyApplicationHistory(studentId as string),
    {
      enabled: !!studentId,
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
        queryClient.invalidateQueries([queryKeys.자습이력조회]);
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
