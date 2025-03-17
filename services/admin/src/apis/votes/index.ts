import { instance } from '..';
import { CreateVoteRequest } from './request';
import { VoteListResponse } from './response';
<<<<<<< HEAD

const router = '/votes';
=======
import { CreateVoteOptionRequest } from './request';

const router = '/votes';
const optionRouter = '/votes/options';
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)

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
<<<<<<< HEAD
=======

export const createVoteOption = async (body: CreateVoteOptionRequest) => {
  const token = localStorage.getItem('accessToken');
  const { data } = await instance.post(`${optionRouter}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
