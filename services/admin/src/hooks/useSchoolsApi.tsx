import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import {
  availAbleFeatures,
  changeSchoolQnA,
  getSchoolList,
  getSchoolQuestion,
  reIssueSchoolCode,
} from '@/apis/schools';
import { ChangeSchoolQnARequest } from '@/apis/schools/request';
import { queryKeys } from '@/utils/queryKeys';
import { useToast } from './useToast';
import { useModal } from './useModal';

export const useReissueSchoolCode = () => useMutation(reIssueSchoolCode);

export const useChangeQnA = (content: ChangeSchoolQnARequest) => {
  const { toastDispatch } = useToast();

  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  return useMutation(() => changeSchoolQnA(content), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getMyProfile']);
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '질문과 답변 수정에 성공하였습니다',
      });
      closeModal();
    },
  });
};

interface PropsType {
  selectedId: string;
  isNextStep: boolean;
}

export const useSchoolQuestionQuery = ({ selectedId, isNextStep }: PropsType) =>
  useQuery(
    [queryKeys.학교확인질문확인, selectedId, isNextStep],
    () =>
      selectedId !== undefined && isNextStep && getSchoolQuestion(selectedId),
  );

export const useSchoolListQuery = () =>
  useQuery([queryKeys.학교리스트조회], getSchoolList);

export const useAvailAbleFeatures = () =>
  useQuery([queryKeys.사용가능기능조회], availAbleFeatures);
