import { studentAccountIssuance } from '@/apis/files';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useToast } from './useToast';
import { useModal } from './useModal';

export const useStudentAccountIssuance = (file: FileList[0]) => {
  const { toastDispatch } = useToast();
  const { closeModal } = useModal();

  return useMutation(() => studentAccountIssuance(file), {
    onSuccess: () => {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '엑셀이 업로드 되었습니다.',
      });
      closeModal();
    },
    onError: (e: AxiosError<{ message: string }>) => {
      if (e.response.data.message === 'Bad Excel Format') {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '올바른 데이터 형식이 아닙니다.',
        });
      } else {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '중복된 데이터가 존재합니다.',
        });
      }
    },
  });
};
