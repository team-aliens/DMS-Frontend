import { instance } from '..';
import { GetExemplaryStudentsResponse } from './response';

const router = '/students';

export const getExemplaryStudents = async (requestDate: string) => {
  const { data } = await instance.get<GetExemplaryStudentsResponse>(
    `${router}/candidate-list`,
    {
      params: { date: requestDate },
    },
  );
  return data;
};
