import { createVote, deleteVote, getVoteList, patchVote } from '@/apis/votes';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from './useToast';
import { CreateVoteRequest } from '@/apis/votes/request';
import { useModal } from './useModal';

export const useVoteList = () => {
  useQuery(['getVoteList'], () => getVoteList());
};

export const useDeleteVote = (voteId: string) => {
  const queryClient = useQueryClient();
  const { toastDispatch } = useToast();

  return useMutation(() => deleteVote(voteId), {
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

export const useWriteVote = (content: CreateVoteRequest) => {
  const { toastDispatch } = useToast();
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  return useMutation(() => createVote(content), {
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

export const usePatchVote = (content: CreateVoteRequest, voteId: string) => {
  const { toastDispatch } = useToast();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  return useMutation(() => patchVote(content, voteId), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '투표가 수정되었습니다.',
      });
      queryClient.invalidateQueries(['getVoteList']);
    },
  });
};
