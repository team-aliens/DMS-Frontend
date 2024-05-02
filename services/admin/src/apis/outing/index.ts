import { instance } from '..';
import {
  OutingApplicationDetailResponse,
  OutingApplicationsResponse,
} from './response';
import { useMutation } from '@tanstack/react-query';
import fileSaver from 'file-saver';
import { getFileNameFromContentDisposition } from '@/utils/decoder';
import { useToast } from '@/hooks/useToast';

const router = '/outings';

export type OutingStatusType = 'APPROVED' | 'DONE';
interface OutingListExcelQueryStringType {
  startDates: string;
  endDates: string;
}

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
