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
} from '@/apis/votes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from './useToast';
import {
  CreateVoteRequest,
  CreateVoteOptionRequest,
} from '@/apis/votes/request';

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
      queryClient.invalidateQueries(['getVoteList']);
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
  return useQuery(['getVoteOptionList', voteId], () =>
    getVoteOptionList(voteId),
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
        message: '모범 학생 후보에서 제외 되었습니다.',
        toastType: 'SUCCESS',
      });
      queryClient.invalidateQueries(['getExcludedStudentList']);
    },
  });
};
