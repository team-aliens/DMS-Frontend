import { instance } from '..';
import { CreateVoteOptionRequest, CreateVoteRequest } from './request';
import { VoteListResponse } from './response';

const router = '/votes';
const optionRouter = './votes/options';

export const getVoteList = async () => {
  const { data } = await instance.get<VoteListResponse>(`${router}`);
  return data;
};

export const createVote = async (body: CreateVoteRequest) => {
  instance.post(`${router}`, body);
};

export const patchVote = async (body: CreateVoteRequest, votingId: string) => {
  instance.patch(`${router}/${votingId}`, body);
};

export const deleteVote = async (votingId: string) => {
  instance.delete(`${router}/${votingId}`);
};

export const createVoteOption = async (body: CreateVoteOptionRequest) => {
  const token = localStorage.getItem('accessToken');
  const { data } = await instance.post(`${optionRouter}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
