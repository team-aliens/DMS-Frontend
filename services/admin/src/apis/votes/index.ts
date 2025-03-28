import { instance } from '..';

import { CreateVoteOptionRequest, CreateVoteRequest } from './request';
import { ExcludedStudentResponse, VoteListResponse } from './response';

const router = '/votes';

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
  const { data } = await instance.post(`${router}/options`, body);
  return data;
};

export const getVoteResult = async (votingTopicId: string) => {
  const { data } = await instance.get(`${router}/result/${votingTopicId}`);
  return data;
};

export const deleteVoteOption = async (votingId: string) => {
  instance.delete(`${router}/option/${votingId}`);
};

export const getVoteOptionList = async (votingId: string) => {
  const { data } = await instance.get(`${router}/option/${votingId}`);
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
