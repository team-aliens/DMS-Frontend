import { instance } from '..';
import {
  OutingApplicationDetailResponse,
  OutingApplicationsResponse,
} from './response';

const router = '/outins';

export type OutingStatusType = 'APPROVED' | 'REJECTED' | 'OUTING' | 'DONE';

/** 외출 신청 내역 상세 보기 */
export const fetchOutingApplicationDetail = async (
  outingApplicationId: string,
) => {
  const { data } = await instance.get<Promise<OutingApplicationDetailResponse>>(
    `${router}/${outingApplicationId}`,
  );
  return data;
};

/** 외출 신청 내역 조회 */
export const fetchOutingApplications = async (
  outing_status: OutingStatusType,
  name: string,
  date: string,
) => {
  const { data } = await instance.get<Promise<OutingApplicationsResponse>>(
    `${router}/?outing_status=${outing_status}&name=${name}&date=${date}`,
  );
  return data;
};

/** 외출 신청 상태 변경 */
export const updateOutingApplicationStatus = async (
  outingApplicationId: string,
  outing_status: OutingStatusType,
) => {
  return await instance.patch(
    `${router}/${outingApplicationId}/?outing_status=${outing_status}`,
  );
};
