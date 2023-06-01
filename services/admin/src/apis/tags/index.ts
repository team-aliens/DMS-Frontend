import { MutationOptions, useMutation } from '@tanstack/react-query';
import { instance } from '..';
import { TagListResponse } from './response';
import { AxiosError } from 'axios';
import { useToast } from '@/hooks/useToast';
const router = '/tags';

export const deleteTag = async (student_id: string, tag_id: string) => {
  await instance.delete(
    `${router}/students?student_id=${student_id}&tag_id=${tag_id}`,
  );
};

/** 태그 전체 조회 */
export const getAllTags = async () => {
  const { data } = await instance.get<Promise<TagListResponse>>(`${router}`);
  return data;
};

/** 태그 부여 */
export const useGiveTag = (
  selectedTagId: string,
  selectedStudentId: string[],
) => {
  const body = {
    tag_id: selectedTagId,
    student_ids: selectedStudentId,
  };
  const { toastDispatch } = useToast();

  return useMutation(async () => instance.post(`${router}/students`, body), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: `태그가 부여되었습니다.`,
      });
    },
    onError: (e: AxiosError) => {
      if (e.request.status) {
        switch (e.request.status) {
          case 500:
            return toastDispatch({
              actionType: 'APPEND_TOAST',
              toastType: 'ERROR',
              message: `관리자에게 문의해주세요.`,
            });
          default:
            toastDispatch({
              actionType: 'APPEND_TOAST',
              toastType: 'ERROR',
              message: `태그 부여를 실패했습니다.`,
            });
        }
      } else {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'SUCCESS',
          message: `인터넷 연결을 확인해주세요.`,
        });
      }
    },
  });
};

export const useAddTag = (
  name: string,
  color: string,
  options?: MutationOptions,
) => {
  const body = {
    name,
    color,
  };

  return useMutation(async () => instance.post(`${router}`, body), {
    ...options,
  });
};

export const useEditTag = (
  id: string,
  name: string,
  color: string,
  options?: MutationOptions,
) => {
  const body = {
    name,
    color,
  };
  return useMutation(async () => instance.patch(`${router}/${id}`, body), {
    ...options,
  });
};

export const useDeleteTag = (id: string, options?: MutationOptions) => {
  return useMutation(async () => await instance.delete(`${router}/${id}`), {
    ...options,
  });
};
