import { instance } from '..';
import {
  OutingApplicationDetailResponse,
  OutingApplicationsResponse,
} from './response';
import { MutationOptions, useMutation } from '@tanstack/react-query';
import fileSaver from 'file-saver';
import { getFileNameFromContentDisposition } from '@/utils/decoder';
import { useToast } from '@/hooks/useToast';
import {
  OutingListExcelQueryStringType,
  OutingTypeReqeustType,
} from './request';
import { EditOutingRequestType, SettingOutingRequestType } from './request';

const router = '/outings';

export type OutingStatusType = 'APPROVED' | 'DONE';
export type DayOfWeekType =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

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

/** 외출 유형 조회 */
export const getOutingType = async () => {
  const { data } = await instance.get<Promise<OutingTypeReqeustType>>(
    `${router}/types`,
  );
  return data;
};

/** 외출 유형 삭제 */
export const useDeleteOutingListOption = (
  title: string,
  options?: MutationOptions,
) => {
  return useMutation(
    async () => await instance.delete(`${router}/types/${title}`),
    {
      ...options,
    },
  );
};

/** 외출 유형 추가 */

export const useAddOutingType = (title: string, options?: MutationOptions) => {
  return useMutation(
    async () =>
      await instance.post(`${router}/types`, {
        title,
      }),
    {
      ...options,
    },
  );
};

/** 외출 신청 내역 엑셀 */
export const useGetOutingListExcel = ({
  startDates,
  endDates,
}: OutingListExcelQueryStringType) => {
  const { toastDispatch } = useToast();
  return useMutation(
    async () =>
      await instance.get(
        `${router}/files?start=${startDates}&end=${endDates}`,
        {
          responseType: 'blob',
        },
      ),
    {
      onSuccess: (res) => {
        const blob = new Blob([res.data], {
          type: res.headers['content-type'],
        });
        const fileName = res.headers['content-disposition'];

        fileSaver.saveAs(blob, getFileNameFromContentDisposition(fileName));
      },
      onError: () => {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '외출 기간에 신청한 학생이 없습니다.',
        });
      },
    },
  );
};

/** 외출 가능 시간 설정 */
export const fetchOutingTimeSetting = async (
  body: SettingOutingRequestType,
) => {
  await instance.post(`${router}/available-time`, body);
};

/** 외출 가능 시간 수정 */
export const editOutingApplicationTime = async (
  availableTimeId: string,
  body: EditOutingRequestType,
) => {
  return await instance.patch(
    `${router}/available-time/${availableTimeId}`,
    body,
  );
};

/** 외출 가능 시간 삭제 */
export const deleteOutingApplicationTime = async (
  outingAvailableTimeId: string,
) => {
  return await instance.delete(
    `${router}/available-time/${outingAvailableTimeId}`,
  );
};

/** 외출 가능 시간 조회 */
export const getOutingApplicationTime = async (dayOfWeek: DayOfWeekType) => {
  return await instance.get(`${router}/available-time?dayOfWeek=${dayOfWeek}`);
};
