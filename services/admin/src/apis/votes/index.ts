import { instance } from '..';
import { CreateVoteOptionRequest, CreateVoteRequest } from './request';
import { VoteListResponse } from './response';

const router = '/votes';
const optionRouter = './votes/options';
const exemplaryRouter = '/candidate-list';

export const getVoteList = async () => {
  const { data } = await instance.get<VoteListResponse>(`${router}`);
  return data;
};

export const createVote = async (body: CreateVoteRequest) => {
  await instance.post(`${router}`, body);
};

export const patchVote = async (body: CreateVoteRequest, votingId: string) => {
  await instance.patch(`${router}/${votingId}`, body);
};

export const deleteVote = async (votingId: string) => {
  await instance.delete(`${router}/${votingId}`);
};

export const createVoteOption = async (body: CreateVoteOptionRequest) => {
  const { data } = await instance.post(`${optionRouter}`, body);
  return data;
};

export const getVoteResult = async (votingTopicId: string) => {
  const { data } = await instance.get(`/result/${votingTopicId}`);
  return data;
};

export const getExemplaryStudents = async (requestDate: string) => {
  const { data } = await instance.get(exemplaryRouter, {
    params: { requestDate },
  });
  return data.students;
};
