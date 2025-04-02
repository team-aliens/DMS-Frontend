import { instance } from '..';
import { GetModelStudentsResponse } from './response';

const router = '/step';

export const getModelStudents = async (requestDate: string) => {
  const { data } = await instance.get<GetModelStudentsResponse>(
    `${router}/candidate-list`,
    {
      params: { date: requestDate },
    },
  );
  return data;
};
