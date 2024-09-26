import { instance } from '..';
import {
  getApplicationVolunteerStudentsResponse,
  getVolunteerCurrentResponse,
  getVolunteersResponse,
} from './response';
import { addVolunteerWorkRequest } from './request';

const router = '/volunteers';

// 봉사 활동 조회
export const getVolunteers = async () => {
  const { data } = await instance.get<getVolunteersResponse>(
    `${router}/manager`,
  );
  return data;
};

// 봉사 활동 추가
export const addVolunteerWork = async (body: addVolunteerWorkRequest) => {
  await instance.post(`${router}`, body);
};

// 봉사 활동 삭제
export const deleteVolunteerWork = async (volunteerId: string) => {
  await instance.delete(`${router}/${volunteerId}`);
};

// 봉사 활동 신청된 학생 조회
export const getApplicationVolunteerStudents = async (volunteerId: string) => {
  const { data } = await instance.get<getApplicationVolunteerStudentsResponse>(
    `${router}/${volunteerId}`,
  );
  return data;
};

// 봉사 활동 신청 수락
export const approveVolunteerApplication = async (
  volunteerApplicationId: string,
) => {
  await instance.post(`${router}/approve/${volunteerApplicationId}`);
};

// 봉사 활동 신청 거절
export const rejectVolunteerApplication = async (
  volunteerApplicationId: string,
) => {
  await instance.delete(`${router}/reject/${volunteerApplicationId}`);
};

// 봉사 현황 조회
export const getVolunteerCurrent = async () => {
  const { data } = await instance.get<getVolunteerCurrentResponse>(
    `${router}/current`,
  );
  return data;
};

// 봉사 활동 신청 제외
export const excludeVolunteerApplication = async (
  volunteerApplicationId: string,
) => {
  await instance.delete(`${router}/exclude/${volunteerApplicationId}`);
};
