import { instance } from '..';
import { addVolunteerWorkResposne, getVolunteersResponse } from './response';

const router = '/volunteers';

// 봉사 활동 조회
export const getVolunteers = async () => {
  const { data } = await instance.get<getVolunteersResponse>(
    `${router}/manager`,
  );
  return data;
};

// 봉사 활동 추가
export const addVolunteerWork = async (body: addVolunteerWorkResposne) => {
  await instance.post(`${router}`, body);
};

// 봉사 활동 삭제
export const deleteVolunteerWork = async (volunteerId: string) => {
  await instance.delete(`${router}/${volunteerId}`);
};
