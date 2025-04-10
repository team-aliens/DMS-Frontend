import { instance } from '..';

import {
  CreateExcludedStudent,
  CreateVoteOptionRequest,
  CreateVoteRequest,
} from './request';
import {
  ExcludedStudentResponse,
  VoteListResponse,
  VoteOptionListResponse,
  VoteResultResponse,
} from './response';

const router = '/votes';

export const getVoteList = async () => {
  const { data } = await instance.get<VoteListResponse>(`${router}`);
  return data;
};

export const createVote = async (body: CreateVoteRequest) => {
  const { data } = await instance.post<{ voting_topic_id: string }>(
    `${router}`,
    body,
  );
  return data;
};

export const patchVote = async (body: CreateVoteRequest, votingId: string) => {
  await instance.patch(`${router}/${votingId}`, body);
};

export const deleteVote = async (votingId: string) => {
  await instance.delete(`${router}/${votingId}`);
};

export const createVoteOption = async (body: CreateVoteOptionRequest) => {
  return await instance.post(`${router}/option`, body);
};

export const getVoteResult = async (votingTopicId: string) => {
  const { data } = await instance.get<VoteResultResponse>(
    `${router}/result/${votingTopicId}`,
  );
  return data;
};

export const deleteVoteOption = async (votingId: string) => {
  await instance.delete(`${router}/option/${votingId}`);
};

export const getVoteOptionList = async (votingId: string) => {
  const { data } = await instance.get<VoteOptionListResponse>(
    `${router}/option/${votingId}`,
  );
  return data;
};

export const getExcludedStudent = async () => {
  const { data } = await instance.get<ExcludedStudentResponse>(
    `${router}/excluded-student`,
  );
  return data;
};

export const deleteExcludedStudent = async (studentId: string) => {
  instance.delete(`${router}/excluded-student/${studentId}`);
};

export const createExcludedStudent = async (body: CreateExcludedStudent) => {
  return instance.post(`${router}/excluded-student`, body);
};
