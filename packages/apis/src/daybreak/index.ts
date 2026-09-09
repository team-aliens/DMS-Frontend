import { instance } from '..';
import {
  GeneralStudyApplicationRequest,
  HeadStudyApplicationRequest,
  ManagerStudyApplicationRequest,
  PatchStudyApplicationStatusRequest,
  RevertStudyApplicationRequest,
  StudyApplicationHistoryRequest,
} from './request';
import {
  GetStudyApplicationsResponse,
  GeneralStudyApplication,
  HeadStudyApplication,
  ManagerStudyApplication,
  StudyApplicationHistory,
  GetStudyApplicationType,
} from './response';
import { useMutation } from '@tanstack/react-query';
import fileSaver from 'file-saver';
import { getFileNameFromContentDisposition } from '@/utils/decoder';

const router = '/daybreaks';

export const getGeneralStudyApplications = async (
  state: GeneralStudyApplicationRequest
) => {
  const { data } = await instance.get<
    GetStudyApplicationsResponse<GeneralStudyApplication>
  >(`${router}/general/study-application`, {
    params: state,
  });
  return data;
};

export const getHeadStudyApplications = async (
  state: HeadStudyApplicationRequest
) => {
  const { data } = await instance.get<
    GetStudyApplicationsResponse<HeadStudyApplication>
  >(`${router}/head/study-application`, {
    params: state,
  });
  return data;
};

export const getManagerStudyApplications = async (
  state: ManagerStudyApplicationRequest
) => {
  const { data } = await instance.get<
    GetStudyApplicationsResponse<ManagerStudyApplication>
  >(`${router}/manager/study-application`, {
    params: state,
  });
  return data;
};

export const getStudyApplicationHistory = async (
  student_id: string,
  state: StudyApplicationHistoryRequest = {}
) => {
  const { data } = await instance.get<
    GetStudyApplicationsResponse<StudyApplicationHistory>
  >(`${router}/study-application/history/${student_id}`, {
    params: state,
  });
  return data;
};

export const getStudyApplicationTypes = async () => {
  const { data } = await instance.get<GetStudyApplicationType>(
    `${router}/study-type`
  );
  return data;
};

export const patchStudyApplicationStatus = async (
  body: PatchStudyApplicationStatusRequest
) => {
  await instance.patch(`${router}/study-application`, body);
};

/** 부장 선생님이 자신이 내린 최종 승인/거절을 1차 승인 상태로 되돌린다 */
export const revertStudyApplication = async (
  body: RevertStudyApplicationRequest
) => {
  await instance.patch(`${router}/study-application/revert`, body);
};

export const useGetStudyApplicationExcel = () =>
  useMutation(
    () =>
      instance.get(`${router}/manager/study-application/export`, {
        responseType: 'blob',
      }),
    {
      onSuccess: (res) => {
        const blob = new Blob([res.data], {
          type: res.headers['content-type'] as string,
        });
        const fileName = res.headers['content-disposition'] as string;

        fileSaver.saveAs(blob, getFileNameFromContentDisposition(fileName));
      },
    }
  );
