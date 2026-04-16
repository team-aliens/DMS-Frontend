import { instance } from '..';
import {
  GeneralStudyApplicationRequest,
  HeadStudyApplicationRequest,
  ManagerStudyApplicationRequest,
  PatchStudyApplicationStatusRequest,
} from './request';
import {
  GetStudyApplicationResponse,
  GeneralStudyApplication,
  HeadStudyApplication,
  ManagerStudyApplication,
  GetStudyApplicationType,
} from './response';

const router = '/daybreak';

export const getGeneralStudyApplication = async (
  state: GeneralStudyApplicationRequest
) => {
  const { data } = await instance.get<
    GetStudyApplicationResponse<GeneralStudyApplication>
  >(`${router}/general/study-application`, {
    params: state,
  });
  return data;
};

export const getHeadStudyApplication = async (
  state: HeadStudyApplicationRequest
) => {
  const { data } = await instance.get<
    GetStudyApplicationResponse<HeadStudyApplication>
  >(`${router}/head/study-application`, {
    params: state,
  });
  return data;
};

export const getManagerStudyApplication = async (
  state: ManagerStudyApplicationRequest
) => {
  const { data } = await instance.get<
    GetStudyApplicationResponse<ManagerStudyApplication>
  >(`${router}/manager/study-application`, {
    params: state,
  });
  return data;
};

export const getStudyApplicationType = async () => {
  const { data } = await instance.get<GetStudyApplicationType>(
    `${router}/study-type`
  );
  return data;
};

export const patchStudyApplicationStatus = async (
  body: PatchStudyApplicationStatusRequest
) => {
  await instance.patch(`${router}`, body);
};
