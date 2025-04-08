import { instance } from '..';
import { GetModelStudentsResponse } from './response';

const router = '/students';

export const getModelStudents = async (requestDate: string) => {
  const { data } = await instance.get<GetModelStudentsResponse>(
    `${router}/step/candidate-list`,
    {
      params: { date: requestDate },
    },
  );
  return data;
};
