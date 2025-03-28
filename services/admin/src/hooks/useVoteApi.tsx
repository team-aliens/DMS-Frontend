import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createVote,
  deleteVote,
  getVoteList,
  patchVote,
  createVoteOption,
  getVoteResult,
} from '@/apis/votes';
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
