import { useQuery } from '@tanstack/react-query';
import {
  fetchOutingApplicationDetail,
  fetchOutingApplications,
} from '@/apis/outing';
import { queryKeys } from '@/utils/queryKeys';
import { ApplyOutingReqeustType } from '@/apis/outing/request';

export const useOutingApplicationDetail = (outingApplicationId: string) =>
  useQuery(
    [queryKeys.외출신청내역상세보기],
    () => {
      return fetchOutingApplicationDetail(outingApplicationId);
    },
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

export const useOutingApplications = ({
  date,
  student_name = '',
}: ApplyOutingReqeustType) =>
  useQuery(
    [queryKeys.외출신청내역조회, student_name, date],
    () => fetchOutingApplications(date, student_name),
    {
      refetchOnWindowFocus: true,
    },
  );
