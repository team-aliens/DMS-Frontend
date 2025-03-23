import {
  createVote,
  deleteExcludedStudent,
  deleteVote,
  deleteVoteOption,
  getExcludedStudent,
  getVoteList,
  getVoteOptionList,
  patchVote,
} from '@/apis/votes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from './useToast';
import { CreateVoteRequest } from '@/apis/votes/request';
import { useModal } from './useModal';

export const useVoteList = () => {
  return useQuery(['getVoteList'], () => getVoteList());
};

export const useDeleteVote = () => {
  const queryClient = useQueryClient();
  const { toastDispatch } = useToast();

  return useMutation((voteId: string) => deleteVote(voteId), {
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

  return useMutation((content: CreateVoteRequest) => createVote(content), {
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

export const useVoteOptionList = (voteId: string) => {
  return useQuery(['getVoteOptionList'], () => getVoteOptionList(voteId));
};

export const useDeleteVoteOption = () => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();

  return useMutation((voteId: string) => deleteVoteOption(voteId), {
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
  return useQuery(['getExcludedStudentList'], () => getExcludedStudent());
};

export const useDeleteExcludedStudent = (studentId: string) => {
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
