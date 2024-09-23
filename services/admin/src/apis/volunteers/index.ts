import { instance } from '..';
import { getVolunteersResponse } from './response';

const router = '/volunteers';

export const getVolunteers = async () => {
  const { data } = await instance.get<getVolunteersResponse>(
    `${router}/manager`,
  );
  return data;
};
