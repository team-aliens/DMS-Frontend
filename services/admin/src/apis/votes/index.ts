import { instance } from '..';
import { CreateVoteRequest } from './request';
import { ExcludedStudentResponse, VoteListResponse } from './response';

const router = '/votes';

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

export const deleteVoteOption = async (votingId: string) => {
  instance.delete(`${router}/option/${votingId}`);
};

export const getVoteOptionList = async (votingId: string) => {
  const { data } = await instance.get(`${router}/option/${votingId}`);
  return data;
};

export const getExcludedStudent = async () => {
  const { data } = await instance.get<ExcludedStudentResponse>(
    `${router}/excluded-studen`,
  );
  return data;
};

export const deleteExcludedStudent = async (studentId: string) => {
  instance.delete(`${router}/excluded-studen/${studentId}`);
};
