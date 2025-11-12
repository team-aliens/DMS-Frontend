import {
  createVote,
  deleteExcludedStudent,
  deleteVote,
  deleteVoteOption,
  getExcludedStudent,
  getVoteList,
  getVoteOptionList,
  patchVote,
  createVoteOption,
  getVoteResult,
  createExcludedStudent,
} from '@/apis/votes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from './useToast';
import { CreateVoteRequest } from '@/apis/votes/request';
import { getModelStudents } from '@/apis/students';

export const useVoteList = () => {
  return useQuery(['getVoteList'], getVoteList);
};

export const useDeleteVote = () => {
  const queryClient = useQueryClient();
  const { toastDispatch } = useToast();

  return useMutation(deleteVote, {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        message: '투표가 삭제되었습니다.',
        toastType: 'SUCCESS',
      });
      queryClient.invalidateQueries(['getVoteList']);
    },
  });
};

export const useWriteVote = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(createVote, {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '투표가 게시되었습니다.',
      });
      queryClient.invalidateQueries(['getVoteList']);
    },
  });
};

export const usePatchVote = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ content, voteId }: { content: CreateVoteRequest; voteId: string }) =>
      patchVote(content, voteId),
    {
      onSuccess: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: '투표가 수정되었습니다.',
        });
        queryClient.invalidateQueries(['getVoteList']);
      },
    },
  );
};

export const useCreateVoteOption = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(createVoteOption, {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '투표 항목이 추가되었습니다.',
      });
      queryClient.invalidateQueries(['getVoteOptionList']);
    },
  });
};

export const useVoteResult = (votingTopicId: string) => {
  return useQuery(
    ['getVoteResult', votingTopicId],
    () => getVoteResult(votingTopicId),
    {
      enabled: !!votingTopicId,
    },
  );
};

export const useVoteOptionList = (voteId: string) => {
  return useQuery(
    ['getVoteOptionList', voteId],
    () => getVoteOptionList(voteId),
    {
      enabled: !!voteId,
    },
  );
};

export const useDeleteVoteOption = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation((voteOptionId: string) => deleteVoteOption(voteOptionId), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        message: '투표 항목이 삭제되었습니다.',
        toastType: 'SUCCESS',
      });
      queryClient.invalidateQueries(['getVoteOptionList']);
    },
  });
};

export const useExcludedStudentList = () => {
  return useQuery(['getExcludedStudentList'], getExcludedStudent);
};

export const useDeleteExcludedStudent = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation((studentId: string) => deleteExcludedStudent(studentId), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        message: '제외 학생 제거에 성공했습니다.',
        toastType: 'SUCCESS',
      });
      queryClient.invalidateQueries(['getExcludedStudentList']);
    },
    onError: (err) => {
      console.error(err);
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '제외 학생 제거에 실패했습니다.',
      });
    },
  });
};

export const useModelStudentList = (requestDate: string) => {
  return useQuery(['getModelStudentList', requestDate], () =>
    getModelStudents(requestDate),
  );
};

export const useCreateExcludedStudent = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation(createExcludedStudent, {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '제외 학생이 추가되었습니다.',
      });
      queryClient.invalidateQueries(['getExcludedStudentList']);
    },
    onError: (err) => {
      console.error(err);
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '제외 학생 추가에 실패했습니다.',
      });
    },
  });
};
