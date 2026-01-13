import { instance } from '..';
import {
  getApplicationVolunteerStudentsResponse,
  getVolunteerCurrentResponse,
  getVolunteersResponse,
  getVolunteerAssignedScoreResponse,
} from './response';
import {
  addVolunteerWorkRequest,
  editVolunteerWorkRequest,
  updateVolunteerApplicationScoreRequest,
} from './request';

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
  await instance.post(`${router}/approval/${volunteerApplicationId}`);
};

// 봉사 활동 신청 거절
export const rejectVolunteerApplication = async (
  volunteerApplicationId: string,
) => {
  await instance.delete(`${router}/rejection/${volunteerApplicationId}`);
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
  await instance.delete(`${router}/exception/${volunteerApplicationId}`);
};

// 봉사 활동 수정
export const editVolunteerWork = async (
  volunteerId: string,
  body: editVolunteerWorkRequest,
) => {
  await instance.patch(`${router}/${volunteerId}`, body);
};

// 봉사 활동 부여 상점 업데이트
export const updateVolunteerApplicationScore = async (
  volunteerApplicationId: string,
  body: updateVolunteerApplicationScoreRequest,
) => {
  await instance.patch(`${router}/score/${volunteerApplicationId}`, body);
};

// 봉사 활동 부여 점수 조회 (manager)
export const getVolunteerAssignedScore = async (
  volunteerApplicationId: string,
) => {
  const { data } = await instance.get<getVolunteerAssignedScoreResponse>(
    `${router}/score/${volunteerApplicationId}`,
  );
  return data;
};
