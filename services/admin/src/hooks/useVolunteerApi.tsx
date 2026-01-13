import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getVolunteers,
  addVolunteerWork,
  deleteVolunteerWork,
  getApplicationVolunteerStudents,
  approveVolunteerApplication,
  rejectVolunteerApplication,
  getVolunteerCurrent,
  excludeVolunteerApplication,
  editVolunteerWork,
  updateVolunteerApplicationScore,
  getVolunteerAssignedScore,
} from '@/apis/volunteers';
import { useToast } from './useToast';
import {
  addVolunteerWorkRequest,
  editVolunteerWorkRequest,
  updateVolunteerApplicationScoreRequest,
} from '@/apis/volunteers/request';

export const useVolunteerList = () => {
  return useQuery(['getVolunteers'], getVolunteers, {
    refetchOnWindowFocus: true,
  });
};

export const useVolunteerCurrent = () => {
  return useQuery(['getVolunteerCurrent'], getVolunteerCurrent, {
    refetchOnWindowFocus: true,
  });
};

export const useApplicationVolunteerStudents = (volunteerId: string) =>
  useQuery(
    ['getApplicationVolunteerStudents', volunteerId],
    () => getApplicationVolunteerStudents(volunteerId),
    {
      enabled: !!volunteerId,
    },
  );

export const useAddVolunteerWork = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    (body: addVolunteerWorkRequest) => addVolunteerWork(body),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '봉사 활동이 추가되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteers']);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 활동 추가에 실패했습니다.',
        });
      },
    },
  );
};

export const useDeleteVolunteerWork = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    (volunteerId: string) => deleteVolunteerWork(volunteerId),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '봉사 활동이 삭제되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteers']);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 활동 삭제에 실패했습니다.',
        });
      },
    },
  );
};

export const useApproveVolunteerApplication = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    (volunteerApplicationId: string) =>
      approveVolunteerApplication(volunteerApplicationId),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '봉사 신청이 승인되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteerCurrent']);
        queryClient.invalidateQueries(['getVolunteers']);
        queryClient.invalidateQueries(['getApplicationVolunteerStudents']);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 신청 승인에 실패했습니다.',
        });
      },
    },
  );
};

export const useRejectVolunteerApplication = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    (volunteerApplicationId: string) =>
      rejectVolunteerApplication(volunteerApplicationId),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '봉사 신청이 거절되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteerCurrent']);
        queryClient.invalidateQueries(['getVolunteers']);
        queryClient.invalidateQueries(['getApplicationVolunteerStudents']);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 신청 거절에 실패했습니다.',
        });
      },
    },
  );
};

export const useExcludeVolunteerApplication = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    (volunteerApplicationId: string) =>
      excludeVolunteerApplication(volunteerApplicationId),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '봉사 신청이 제외되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteerCurrent']);
        queryClient.invalidateQueries(['getVolunteers']);
        queryClient.invalidateQueries(['getApplicationVolunteerStudents']);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 신청 제외에 실패했습니다.',
        });
      },
    },
  );
};

export const useEditVolunteerWork = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({
      volunteerId,
      body,
    }: {
      volunteerId: string;
      body: editVolunteerWorkRequest;
    }) => editVolunteerWork(volunteerId, body),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '봉사 활동이 수정되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteers']);
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 활동 수정에 실패했습니다.',
        });
      },
    },
  );
};

export const useVolunteerAssignedScore = (volunteerApplicationId: string) => {
  const { toastDispatch } = useToast();

  return useQuery(
    ['getVolunteerAssignedScore', volunteerApplicationId],
    () => getVolunteerAssignedScore(volunteerApplicationId),
    {
      enabled: !!volunteerApplicationId,
      refetchOnWindowFocus: false,
      staleTime: 30_000,
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 활동 부여 점수 조회에 실패했습니다.',
        });
      },
    },
  );
};

export const usePrefetchVolunteerAssignedScore = () => {
  const queryClient = useQueryClient();

  return (volunteerApplicationId: string) =>
    queryClient.prefetchQuery(
      ['getVolunteerAssignedScore', volunteerApplicationId],
      () => getVolunteerAssignedScore(volunteerApplicationId),
      {
        staleTime: 30_000,
      },
    );
};

export const useUpdateVolunteerApplicationScore = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({
      volunteerApplicationId,
      body,
    }: {
      volunteerApplicationId: string;
      body: updateVolunteerApplicationScoreRequest;
    }) => updateVolunteerApplicationScore(volunteerApplicationId, body),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '상벌점이 조정되었습니다.',
        });
        queryClient.invalidateQueries(['getVolunteerCurrent']);
        queryClient.invalidateQueries(['getVolunteers']);
        queryClient.invalidateQueries(['getApplicationVolunteerStudents']);
      },
      onError: (error: any) => {
        const errorMessage =
          error?.response?.status === 404
            ? '해당 봉사활동 신청을 찾을 수 없습니다. 신청 정보를 확인해주세요.'
            : '상벌점 조정에 실패했습니다.';
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: errorMessage,
        });
      },
    },
  );
};
