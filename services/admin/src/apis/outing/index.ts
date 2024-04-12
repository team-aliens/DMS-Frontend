import { instance } from '..';
import {
  OutingApplicationDetailResponse,
  OutingApplicationsResponse,
} from './response';

const router = '/outings';

export type OutingStatusType = 'APPROVED' | 'DONE';

/** 외출 신청 내역 상세 보기 */
export const fetchOutingApplicationDetail = async (
  outingApplicationId: string,
) => {
  const { data } = await instance.get<OutingApplicationDetailResponse>(
    `${router}/history/${outingApplicationId}`,
  );
  return data;
};

/** 외출 신청 내역 조회 */
export const fetchOutingApplications = async (
  date: string,
  student_name?: string,
) => {
  const url =
    `${router}/histories` +
    (student_name && student_name.trim() !== ''
      ? `?student_name=${student_name}&date=${date}`
      : `?date=${date}`);

  const { data } = await instance.get<OutingApplicationsResponse>(url);
  return data;
};

/** 외출 신청 상태 변경 */
export const updateOutingApplicationStatus = async (
  outingApplicationId: string,
  outing_status: OutingStatusType,
) => {
  return await instance.patch(
    `${router}/${outingApplicationId}?outing_status=${outing_status}`,
  );
};
